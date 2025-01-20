"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/components/Provider/ReduxProvider";

type TransactionsObject = {
  _id: string;
  name: string;
  date: string;
  status: string;
};

export default function RecentTransactions() {
  const transactions = useSelector(
    (state: RootState) => state.dashboard.transactions
  );

  function formatDate(date: string) {
    const options: object = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  }

  return (
    <div className="my-4">
      <h1 className="text-center text-2xl text-customOffWhite">Transactions</h1>
      <div className="w-[90%] h-[20vh] bg-customOffWhite mx-auto mt-4 rounded-md overflow-y-auto">
        <div className="">
          <div className="flex justify-around">
            <div className="w-[25%]  text-center">date</div>
            <div className="w-[50%] text-center">name</div>
            <div className="w-[25%] text-center">status</div>
          </div>

          {transactions.map((transaction: TransactionsObject) => (
            <div
              className="flex justify-around border-b-2 border-customBlack shadow-md m-2 py-1"
              key={transaction._id}
            >
              <div className="w-[25%] text-center">
                {formatDate(transaction.date)}
              </div>
              <div className="w-[50%] text-center">{transaction.name}</div>
              <div className="w-[25%] text-center">{transaction.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
