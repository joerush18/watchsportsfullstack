const express = require("express");
const app = express();
const scraper = require("../backend/Routes/scraper");
const dotenv = require("dotenv");
dotenv.config();

// CORS Error Solution.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH");
    return res.status(200).json({});
  }
  next();
});

app.use("/api", scraper);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
