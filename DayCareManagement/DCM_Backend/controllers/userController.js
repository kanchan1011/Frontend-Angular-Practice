// controllers/userController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
require("dotenv").config();

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const existing = await User.findOne({ where: { email } });
    if (existing) return res.status(400).json({ msg: "User already exists" });

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hash, role });
    res.status(201).json({ msg: "User registered", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.login = async (req, res) => {
//   let { email, password } = req.body;
  
//   if (!email || !password) {
//     return res.status(400).json({ msg: "Email and password required" });
//   }

//   email = email.trim();
//   password = password.trim();

//   try {
//     const user = await User.findOne({ where: { email } });
//     if (!user) {
//       console.log("❌ User not found:", email);
//       return res.status(404).json({ msg: "User not found" });
//     }

//     console.log("Login attempt:", { email, password, hash: user.password });

//     const validPass = await bcrypt.compare(password, user.password);
//     console.log("🔍 Compare result:", validPass);

//     if (!validPass) {
//       return res.status(400).json({ msg: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { id: user.id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     return res.status(200).json({ token });
//   } catch (err) {
//     console.error("🔥 Login exception:", err);
//     return res.status(500).json({ error: "Server error" });
//   }
// };



exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    console.log("Logging in user:", user.email, user.password);
    if (!user) return res.status(404).json({ msg: "User not found" });

    console.log("Stored hashed password:", user.password, "REq: ", req.body);
    const validPass =  bcrypt.compare(password, user.password); //removed await keyword
    console.log("Login password:", password);
    console.log("Stored hashed password:", user.password);
    console.log("Password valid?", validPass);
    if (!validPass) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.getUsers = async (req, res) => {
//   const users = await User.findAll();
//   res.json(users);
// };

