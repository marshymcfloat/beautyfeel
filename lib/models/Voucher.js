const mongoose = require("mongoose");

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

const voucherSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 6,
    set: (value) => value.toUpperCase(),
  },
  value: {
    type: Number,
    required: true,
  },
  requiredAmount: {
    type: Number,
    default: 0,
  },
  usedOn: {
    type: Date,
    default: null,
  },
});

const Voucher =
  mongoose.models.Voucher || mongoose.model("Voucher", voucherSchema);

module.exports = Voucher;

async function insertVouchers() {
  try {
    const result = await Voucher.insertMany([
      { code: "abcdef", value: 50, requiredAmount: 500 }, // Will be saved as "ABCDEF"
      { code: "ghijkl", value: 100, requiredAmount: 1000 }, // Will be saved as "GHIJKL"
    ]);
    console.log("Vouchers inserted successfully:", result);
  } catch (error) {
    console.error("Error inserting vouchers:", error);
  }
}

insertVouchers();
