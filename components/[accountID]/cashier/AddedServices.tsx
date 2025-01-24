'use client'

import { useDispatch } from "react-redux";
import { transactionActions } from "@/components/Provider/Slices/TransactionSlice";
type AddedServicesProps = {
  title: string,
  quantity: number,
  price: number

}


export default function AddedServices({ title, quantity, price }: AddedServicesProps) {
  const dispatch = useDispatch()

  function handleQuantityChanges(identifier: string, title: string) {
    if (identifier === 'inc') {
      dispatch(transactionActions.modifyServiceQuantity({ identifier, title }))
    }
    if (identifier === 'dec') {
      dispatch(transactionActions.modifyServiceQuantity({ identifier, title }))

    }

  }

  return (
    <div className="flex items-center bg-customOffWhite rounded-lg py-2 my-2">
      <div className="w-[10%] font-bold flex justify-center items-center ">
        <p>{quantity}x</p>
      </div>
      <div className="flex flex-col w-[60%] ">
        <div className="tracking-widest">
          <p>{title}</p>
        </div>
        <div className=" ">
          <p>&#8369; {price}</p>
        </div>
      </div>
      <div className="flex w-[20%] justify-around items-center">
        <button
          type="button"
          onClick={() => { handleQuantityChanges('dec', title) }}
          className="w-[20px] h-[20px]  border-2 border-customBlack rounded-md flex justify-center items-center"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => { handleQuantityChanges('inc', title) }}
          className="w-[20px] h-[20px] border-2 bg-customBlack text-customOffWhite border-customBlack rounded-md flex justify-center items-center"
        >
          +
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">&#8369; {quantity * price}</div>
    </div>
  );
}
