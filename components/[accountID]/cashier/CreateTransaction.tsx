"use client";

import { useDispatch, useSelector } from "react-redux";
import CustomerStreak from "./CustomerStreak";
import { RootState } from "@/components/Provider/ReduxProvider";
import SelectGroup from "../InputGroups/SelectGroup";
import ServiceSelectGroup from "../InputGroups/ServiceSelectGroup";
import CustomerTextInput from "../InputGroups/CustomerTextInput";
import AddedServices from "./AddedServices";
import { useRouter } from "next/navigation";
import VoucherInput from "../InputGroups/VoucherInput";
import { modalActions } from "@/components/Provider/Slices/modalSlices";
import { useEffect } from "react";
import { transactionActions } from "@/components/Provider/Slices/TransactionSlice";
type BranchesData = {
  _id: string;
  code: string;
  name: string;
  totalSales: number;
};

type fetchedServiceProps = {
  title: string,
  quantity: number,
  price: number

}

export default function CreateTransaction({ }) {

  const dispatch = useDispatch()

  const branches: BranchesData[] = useSelector(
    (state: RootState) => state.dashboard.branches
  );

  const availedServices = useSelector((state: RootState) => state.transaction.services)
  const grandTotal = useSelector((state: RootState) => state.transaction.grandTotal)
  const streakDiscount = useSelector((state: RootState) => state.transaction.streakDiscount)
  const voucherDisount = useSelector((state: RootState) => state.transaction.voucherDiscount)
  const totalDiscount = useSelector((state: RootState) => state.transaction.totalDiscount)

  const subTotal = grandTotal + totalDiscount

  useEffect(() => {
    dispatch(transactionActions.setTotalDiscount())
  }, [streakDiscount, voucherDisount])

  useEffect(() => {
    dispatch(transactionActions.setTotal())

  }, [availedServices, totalDiscount])

  function handleClosing() {
    dispatch(modalActions.setCashierVisibilityOff())

  }


  function handleSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('meow')

  }

  const methods = [{ name: "Cash" }, { name: "Card" }, { name: "Bank" }];

  const router = useRouter();

  return (
    <div className="fixed inset-0   bg-black bg-opacity-50 z-20 flex items-center justify-center">
      <dialog
        className="w-[50%] h-[90%] relative border-[4px] rounded-xl border-customBlack bg-customOffWhite z-30"
        open
      >
        <div className="absolute right-0 rotate-45 text-4xl mr-2 cursor-pointer" onClick={handleClosing}>
          +
        </div>
        <form action="" onSubmit={handleSubmission} className="w-full h-full overflow-auto">
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
            <VoucherInput />
            <SelectGroup
              label="Payment Method"
              name="method"
              options={methods}
            />
          </div>

          <div className="w-[80%] h-[30%] bg-customBlack border-customBlack border-2  rounded-md p-2 mx-auto overflow-y-auto  ">

            {availedServices.length > 0 ? availedServices.map((service) => (
              <AddedServices key={service.title} title={service.title} price={service.price} quantity={service.quantity} />
            )) : <div className="w-full h-full flex justify-center items-center text-customOffWhite font-bold text-2xl" > <p>no services selected.</p></div>}

          </div>
          <div className="w-[80%] h-[10%]  mx-auto flex  flex-col py-2">
            <div className="flex justify-between w-[80%] mx-auto">
              <p>Sub Total: &#8369; {subTotal}</p>
              <p>Discount: &#8369; {totalDiscount}</p>
            </div>
            <div className="w-[80%] mx-auto flex  ">
              <p>Grand Total: &#8369; {grandTotal}</p>
            </div>
          </div>
          <div className=" h-[10%] w-[80%] mx-auto flex justify-around items-center ">
            <button
              type="button"
              className="hover:bg-customBlack hover:text-customOffWhite transition-all duration-150 border-2 border-customBlack py-2 px-6 rounded-md"
              onClick={handleClosing}
            >
              Cancel
            </button>
            <button
              type="submit"
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
