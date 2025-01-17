"use client";

type CreateTransactionProps = {
  visibilityFn: Function;
  dialogRef?: React.RefObject<HTMLDialogElement>;
};

import TextInputGroup from "../InputGroups/TextInputGroup";
import CustomerStreak from "./CustomerStreak";

export default function CreateTransaction({
  visibilityFn,
  dialogRef,
}: CreateTransactionProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center">
      <dialog
        ref={dialogRef}
        className="w-[50%] h-[70%] relative border-[4px] rounded-xl border-customBlack bg-customOffWhite z-30"
        open
      >
        <div className="absolute right-0 rotate-45 text-4xl mr-2 cursor-pointer">
          +
        </div>
        <form action="" className="w-full h-full">
          <h1 className="text-center font-bold tracking-widest text-4xl my-4 ">
            BeautyFeel
          </h1>
          <TextInputGroup label="Customer Name" />
          <CustomerStreak />
          <div className="bg-slate-500 w-[80%] h-[30%] mt-12 mx-auto flex flex-wrap"></div>
        </form>
      </dialog>
    </div>
  );
}
