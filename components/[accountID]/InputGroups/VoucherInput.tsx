"use client";

import { useState } from "react";
import { checkVoucherValidity } from "@/lib/functions/SSActions";
import { transactionActions } from "@/components/Provider/Slices/TransactionSlice";
import { useDispatch } from "react-redux";
export default function VoucherInput() {
    const dispatch = useDispatch()


    const [voucher, setVoucher] = useState("");

    function handleInputChanges(e: React.ChangeEvent<HTMLInputElement>): void {
        setVoucher(e.target.value.toUpperCase());
        checkVoucherValidity(e.target.value).then((res) => {
            if (res !== undefined) {

                dispatch(transactionActions.setVoucherDiscount(res.discount))
                console.log(res)
                console.log('meow')
            } else {
                dispatch(transactionActions.setVoucherDiscount(0))
            }
        })
    }



    return (
        <div className="flex flex-col w-[220px]">
            <label htmlFor="voucher" className="tracking-widest">
                Voucher
            </label>
            <input
                name="voucher"
                id="voucher"
                onChange={handleInputChanges}
                value={voucher}
                className="border-[2px] border-customBlack p-2 bg-customOffWhite rounded-md text-xl"
            />
        </div>
    );
}
