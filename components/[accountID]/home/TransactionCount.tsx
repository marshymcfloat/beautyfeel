"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/components/Provider/ReduxProvider";
export default function TransactionCount() {
  const rightCount = useSelector(
    (state: RootState) => state.transaction.transactions
  );

  return (
    <div className="border-[6px] border-customBlack  w-[200px] h-[200px] flex flex-col rounded-lg">
      <div className="h-[70%] relative">
        <p className="font-bold text-[96px] absolute top-[-35px] left-0">
          {rightCount.length}
        </p>
      </div>
      <div className="h-[30%]">
        <p className="text-lg ml-2">transactions made today</p>
      </div>
    </div>
  );
}
