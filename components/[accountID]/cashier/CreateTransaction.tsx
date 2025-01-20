"use client";

import { useSelector } from "react-redux";
import TextInputGroup from "../InputGroups/TextInputGroup";
import CustomerStreak from "./CustomerStreak";
import { RootState } from "@/components/Provider/ReduxProvider";
import SelectGroup from "../InputGroups/SelectGroup";
import ServiceSelectGroup from "../InputGroups/ServiceSelectGroup";
import CustomerTextInput from "../InputGroups/CustomerTextInput";
import AddedServices from "./AddedServices";
import { useRouter } from "next/navigation";
type BranchesData = {
  _id: string;
  code: string;
  name: string;
  totalSales: number;
};

export default function CreateTransaction({}) {
  const branches: BranchesData[] = useSelector(
    (state: RootState) => state.dashboard.branches
  );

  const methods = [{ name: "Cash" }, { name: "Card" }, { name: "Voucher" }];

  const router = useRouter();

  return (
    <div className="fixed inset-0   bg-black bg-opacity-50 z-20 flex items-center justify-center">
      <dialog
        className="w-[50%] h-[90%] relative border-[4px] rounded-xl border-customBlack bg-customOffWhite z-30"
        open
      >
        <div className="absolute right-0 rotate-45 text-4xl mr-2 cursor-pointer">
          +
        </div>
        <form action="" className="w-full h-full overflow-auto">
          <div className="">
            <h1 className="text-center font-bold tracking-widest text-4xl my-4 ">
              BeautyFeel
            </h1>
          </div>
          <div className="h-[20%] ">
            <CustomerTextInput />
            <CustomerStreak />
          </div>
          <div className=" w-[80%]   min-h-[20%] mb-6   mx-auto flex flex-wrap gap-x-16  justify-around ">
            <SelectGroup label="Branches" name="branch" options={branches} />
            <ServiceSelectGroup label="Services" />
            <TextInputGroup label="Voucher" />
            <SelectGroup
              label="Payment Method"
              name="method"
              options={methods}
            />
          </div>

          <div className="w-[80%] h-[30%] bg-customBlack border-customBlack border-2  rounded-md p-2 mx-auto overflow-y-auto  ">
            <AddedServices />
            <AddedServices />
            <AddedServices />
            <AddedServices />
          </div>
          <div className="w-[80%] h-[10%]  mx-auto flex  flex-col py-2">
            <div className="flex justify-between w-[80%] mx-auto">
              <p>Sub Total: &#8369; 0</p>
              <p>Discount: &#8369; 0</p>
            </div>
            <div className="w-[80%] mx-auto flex  ">
              <p>Grand Total: &#8369; 0</p>
            </div>
          </div>
          <div className=" h-[10%] w-[80%] mx-auto flex justify-around items-center ">
            <button
              type="button"
              className="hover:bg-customBlack hover:text-customOffWhite transition-all duration-150 border-2 border-customBlack py-2 px-6 rounded-md"
              onClick={() => router.back()}
            >
              Cancel
            </button>
            <button
              type="button"
              className=" hover:bg-customOffWhite hover:text-customBlack transition-all duration-150  border-2 border-customBlack bg-customBlack text-customOffWhite py-2 px-6 rounded-md"
            >
              Create
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
