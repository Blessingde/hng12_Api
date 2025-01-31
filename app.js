const express = require("express");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");

const data = {
  email: "blessingisreal481@gmail.com",
  current_datetime: new Date().toISOString(),
  github_url: "git@github.com:Blessingde/hng12_Api.git",
};

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());

app.get("/", (req, res) => {
  res.status(200).json({
    email: data.email,
    current_datetime: data.current_datetime,
    github_url: data.github_url,
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server is running on port 4000");
});
