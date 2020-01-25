import cors from "cors";
import express from "express";
import "dotenv/config";

// app definition
const app = express();
app.use(cors());
app.use(express.json());

// correct Auth credentials
const defaultEmail = "user@mail.com";
const defaultPassword = "pass123";

// default server response
app.get("/", (req, res) => {
  res.send("Login API default route. Please specify a route!");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  let { email, password } = req.body;
  if (email === defaultEmail && password === defaultPassword) {
    res.send({
      userData: {
        email: defaultEmail,
        password: defaultPassword
      }
    });
  } else {
    res.status(401).send({
      message: "Incorrect credentials !"
    });
  }
});

// app initiator
app.listen(process.env.PORT, () =>
  console.log(`Rest API listening on port ${process.env.PORT}!`)
);
