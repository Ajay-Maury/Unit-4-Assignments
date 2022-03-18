const express = require("express");
const router = express.Router();
const transporter = require("../config/mail");
const User = require("../model/user.model");


async function mail(user)
{
    await transporter.sendMail({
        from: '"Ajay" <ajay@example.com>',
        to: user.email, 
        subject: `Welcome to ABC system ${user.first_name} ${user.last_name}`,
        text: `Hi ${user.first_name}, Please confirm your email address`,
        html: `<b>Hi ${user.first_name}, Please confirm your email address</b>`,
      });
}

 async function adminmail(admin,user)
{
    // console.log(admin.email,user.first_name,user.last_name)
    await transporter.sendMail({
        from: '"Ajay" <ajay@example.com>', 
        to: admin.email,
        subject: `${user.first_name} ${user.last_name} has registered with us`,
        text: `Please welcome ${user.first_name} ${user.last_name}`,
        html: `<b>Please welcome ${user.first_name} ${user.last_name}</b>`,
      });
}

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
      if (user.role !== "admin") {
          let adminArray=(await User.find({ role: "admin" }).limit(4).lean().exec());
        adminArray.forEach(element => {
          adminmail(element, user);
        }); 
        mail(user);                 
    }
    return res.send(user);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.limit || 10;
    const offset = (page - 1) * size;

    const count = Math.ceil(
      (await User.find({}).countDocuments().lean().exec()) / 10
    );

    const users = await User.find({}).skip(offset).limit(size).lean().exec();

    return res.send({ users: users, "Total Pages": count });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
