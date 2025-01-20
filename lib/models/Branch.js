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

const branchSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  totalSales: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Branch = mongoose.models.Branch || mongoose.model("Branch", branchSchema);

module.exports = Branch;

/* Branch.insertMany([
  { code: "BF001", name: "Skin Care" },
  { code: "BF002", name: "Lashes" },
  { code: "BF003", name: "Manicure & Pedicure" },
  { code: "BF004", name: "Massage & Spa" },
]);
 */
