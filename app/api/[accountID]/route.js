import Transaction from "../../../lib/models/Transaction";
import { subDays } from "date-fns"; // Optional: Use date-fns for easier date manipulation
import Branch from "../../../lib/models/Branch";
import Service from "../../../lib/models/Service";

export async function getTransactionsCount() {
  const today = new Date();

  const startOfDay = new Date(today.setHours(0, 0, 0, 0));

  const endOfDay = new Date(today.setHours(23, 59, 59, 999));

  const transactions = await Transaction.find({
    date: { $gte: startOfDay, $lt: endOfDay },
  });

  return transactions.length;
}

export async function getTransactions() {
  const now = new Date();
  const oneWeekAgo = subDays(now, 7);
  const transactions = await Transaction.find({
    date: {
      $gte: oneWeekAgo,
      $lt: now,
    },
  });

  return transactions;
}

export async function getTopCustomers() {
  try {
    const topCustomers = await Transaction.aggregate([
      {
        $group: {
          _id: "$name",
          totalPaid: { $sum: "$grandTotal" },
        },
      },
      {
        $sort: { totalPaid: -1 },
      },
      {
        $limit: 5,
      },
    ]);

    return topCustomers;
  } catch (error) {
    console.error("Error fetching top customers:", error);
    throw error;
  }
}

async function getBranches() {
  return await Branch.find({});
}

async function getServices() {
  return await Service.find({});
}

export async function GET() {
  const transactionCount = await getTransactionsCount();
  const transactions = await getTransactions();
  const topCustomers = await getTopCustomers();
  const branches = await getBranches();
  const services = await getServices();
  return new Response(
    JSON.stringify({
      message: "successful",
      count: transactionCount,
      transactions,
      topCustomers,
      branches,
      services,
    }),
    {
      status: 200,
    }
  );
}
