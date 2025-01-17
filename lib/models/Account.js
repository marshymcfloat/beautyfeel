const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

const accountSchema = new mongoose.Schema({
  role: {
    type: [String],
    required: true,
    enum: ["owner", "worker", "cashier"],
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
    default: 0,
  },
});

accountSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

const Account =
  mongoose.models.Account || mongoose.model("Account", accountSchema);

module.exports = Account;

/* 
(async () => {
  try {
    const accounts = [
      {
        username: "admin",
        password: await bcrypt.hash("admin123", 10),
        role: ["owner", "cashier", "worker"],
      },
      {
        username: "worker1",
        password: await bcrypt.hash("worker123", 10),
        role: ["cashier", "worker"],
      },
    ];

    await Account.insertMany(accounts);

    console.log("Accounts inserted successfully!");
  } catch (error) {
    console.error("Error inserting accounts:", error.message);
  } finally {
    mongoose.connection.close();
  }
})();
 */
