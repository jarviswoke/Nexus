require("dotenv").config();

const express = require("express");
const path = require("path");
// const cors = require("cors");
const authRouter = require("./src/Routes/AuthRoute");
const messageRouter = require("./src/Routes/MessageRoute");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
// app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

// Test route
app.get("/", (req, res) => {
  res.send("Backend running ✅");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
