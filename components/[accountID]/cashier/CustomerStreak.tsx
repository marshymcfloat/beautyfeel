"use client";

import { useSelector, UseSelector } from "react-redux";
import { RootState } from "@/components/Provider/ReduxProvider";
export default function CustomerStreak() {
  const streak = useSelector((state: RootState) => state.transaction.streak);

  return (
    <div className="w-[80%] bg-customBlack h-[5px] mx-auto mt-8 flex justify-between items-center">
      <div
        className={
          streak >= 1
            ? "w-[20px] relative h-[20px] rounded-full border-[4px] border-customBlack bg-green-500"
            : "w-[20px] relative h-[20px] rounded-full border-[4px] border-customBlack bg-customOffWhite"
        }
      >
        <p className="absolute bottom-[-40px] right-[-5px]">
          <span>&#8369;</span>0
        </p>
      </div>
      <div
        className={
          streak >= 2
            ? "w-[20px] relative h-[20px] rounded-full border-[4px] border-customBlack bg-green-500"
            : "w-[20px] relative h-[20px] rounded-full border-[4px] border-customBlack bg-customOffWhite"
        }
      >
        <p className="absolute bottom-[-40px] right-[-5px]">
          <span>&#8369;</span>10
        </p>
      </div>{" "}
      <div
        className={
          streak >= 3
            ? "w-[20px] relative h-[20px] rounded-full border-[4px] border-customBlack bg-green-500"
            : "w-[20px] relative h-[20px] rounded-full border-[4px] border-customBlack bg-customOffWhite"
        }
      >
        <p className="absolute bottom-[-40px] right-[-5px]">
          <span>&#8369;</span>20
        </p>
      </div>
      <div
        className={
          streak >= 4
            ? "w-[20px] relative h-[20px] rounded-full border-[4px] border-customBlack bg-green-500"
            : "w-[20px] relative h-[20px] rounded-full border-[4px] border-customBlack bg-customOffWhite"
        }
      >
        <p className="absolute bottom-[-40px] right-[-5px]">
          <span>&#8369;</span>30
        </p>
      </div>
    </div>
  );
}
