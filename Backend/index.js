//Import express to access the http server
const express = require("express");
//Import cors to access server from anywhere
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  //Returns username and password
  return res.json({ username: username, secret: "sha256..." });
});
//Port is 3001
app.listen(3001);
