"use client";

import { useDispatch } from "react-redux";
import { transactionActions } from "@/components/Provider/Slices/TransactionSlice";
type SelectGroupPropsl = {
  label: string;
  name?: string;
  id?: string;
  options: { title?: string; code?: string; name: string; _id?: string }[];
};

export default function SelectGroup({
  label,
  name = label,
  id = label,
  options,
}: SelectGroupPropsl) {
  const dispatch = useDispatch();
  function handleOptionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(transactionActions.setBranchOrMethod({ [name]: e.target.value }));
  }

  return (
    <div className="flex flex-col w-[220px]">
      <label htmlFor={id} className="tracking-widest">
        {label}
      </label>
      <select
        name={name}
        id={id}
        onChange={handleOptionChange}
        className="p-2 rounded-md bg-customOffWhite border-customBlack border-2 text-xl "
      >
        <option value="">Select Option</option>
        {options.map((option) => (
          <option
            key={option._id || option.name || option.title}
            value={option._id || option.name || option.title}
          >
            {option.title || option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
