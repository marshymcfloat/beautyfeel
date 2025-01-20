const mongoose = require("mongoose");
const { type } = require("os");

async function connectDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/beautyfeelDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

connectDatabase();

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  streak: {
    type: Number,
    required: true,
    default: 0,
    max: 4,
  },
  totalPaid: {
    type: Number,
    required: true,
    default: 0,
  },
  lastTransaction: {
    type: Date,
    required: true,
  },
});

const Customer =
  mongoose.models.Customer || mongoose.model("Customer", customerSchema);

module.exports = Customer;
/* 
Customer.insertMany([
  {
    name: "Daniel Canoy",
    streak: 0,
    totalPaid: 0,
    lastTransaction: new Date(),
  },
  {
    name: "Lyannah Canoy",
    streak: 2,
    totalPaid: 3688,
    lastTransaction: new Date(),
  },
]); */
