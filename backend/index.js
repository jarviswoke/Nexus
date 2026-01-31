require("dotenv").config();

const express = require("express");
// const cors = require("cors");
const authRouter = require("./Routes/AuthRoute");
const messageRouter = require("./Routes/MessageRoute");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
// app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
