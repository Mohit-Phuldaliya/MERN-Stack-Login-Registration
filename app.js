const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

// Secret key for JWT
const secretKey = "your_secret_key";

// Login route
app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({
      email: email,
      password: password,
    });

    if (check) {
      const token = jwt.sign({ email: check.email }, secretKey);
      res.json({ token, user: check });
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

// Signup route
app.post("/signup", async (req, res) => {
  const { username, dob, email, password } = req.body;

  const data = {
    user: username,
    dob: dob,
    email: email,
    password: password,
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      await collection.insertMany([data]);
      const token = jwt.sign({ email: data.email }, secretKey);
      res.json({ token, user: data });
    }
  } catch (e) {
    res.json("fail");
  }
});

app.listen(8000, () => {
  console.log("port connected");
});
