const mongoose = require("mongoose");

function getPhilippineTime() {
  const philippineTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Manila",
  });
  return new Date(philippineTime);
}

function formatDate(date) {
  const options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  };
  return new Date(date).toLocaleDateString("en-US", options);
}

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

const transactionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  streakDiscount: {
    type: Number,
    required: true,
    default: 0,
  },
  servicesAvailed: {
    type: [{}],
    required: true,
  },
  totalDiscount: {
    type: Number,
    required: true,
    default: 0,
  },
  grandTotal: {
    type: Number,
    required: true,
    default: 0,
  },
  voucherDiscount: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: Date,
    default: () => formatDate(getPhilippineTime()),
  },
  status: {
    type: String,
    required: true,
    default: "pending",
    enum: ["pending", "complete"],
  },
});

transactionSchema.methods.getFormattedDate = function () {
  return formatDate(this.date);
};

const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;

/* async function createTransaction() {
  const transaction = new Transaction({
    name: "Jane Doe",
    streakDiscount: 10,
    servicesAvailed: [{ service: "Facial", price: 1000 }],
    totalDiscount: 50,
    grandTotal: 950,
    voucherDiscount: 40,
  });

  await transaction.save();
  console.log("Transaction saved:", transaction);
}

createTransaction();
 */
