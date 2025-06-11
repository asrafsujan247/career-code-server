const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;

// middleware
app.use(cors());
app.use(express.json());

// root api

app.get("/", (req, res) => {
  res.send("Career code is running like a horse");
});

app.listen(port, () => {
  console.log(`App is running on port : `, port);
});
