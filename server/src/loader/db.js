const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

module.exports=async function db() {
  await mongoose.connect(process.env.DB);
  console.log("database connected")
}
