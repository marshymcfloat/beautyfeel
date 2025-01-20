"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/components/Provider/ReduxProvider";
import { transactionActions } from "@/components/Provider/Slices/TransactionSlice";

interface Customer {
  name: string;
  _id: string;
  streak: number;
}

export default function CustomerTextInput() {
  const [customerInput, setCustomerInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const [customerSuggestions, setCustomerSuggestions] = useState<
    Customer[] | null
  >(null);

  const customerName = useSelector(
    (state: RootState) => state.transaction.name
  );
  const dispatch = useDispatch();
  const suggestionRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const pathname = usePathname();
  const accountID = pathname.split("/")[1];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(customerInput);
    }, 500);
    return () => clearTimeout(timer);
  }, [customerInput]);

  useEffect(() => {
    if (debouncedInput) {
      fetchCustomer(debouncedInput);
    } else {
      setCustomerSuggestions(null); // Clear suggestions when input is cleared
    }
  }, [debouncedInput]);

  async function fetchCustomer(query: string) {
    try {
      const response = await fetch(
        `/api/${accountID}/cashier?customerName=${query}`
      );
      if (!response.ok) {
        throw new Error("There was an error fetching customers");
      }
      const data = await response.json();
      setCustomerSuggestions(data.customers);
    } catch (error) {
      console.error(error);
    }
  }

  function handleInputChanges(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setCustomerInput(value);
    dispatch(transactionActions.setCustomerName(value));

    if (!value.trim()) {
      dispatch(transactionActions.setStreak(0)); // Reset streak only when input is cleared
    }
  }

  function handleClickOutside(event: MouseEvent) {
    if (
      suggestionRef.current &&
      !suggestionRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      setCustomerSuggestions(null); // Hide suggestions if clicked outside
    }
  }

  function handleSelectingSuggestion(customer: Customer) {
    console.log("Selected customer:", customer); // Ensure customer has streak
    setCustomerInput(customer.name);
    dispatch(transactionActions.setCustomerName(customer.name));
    dispatch(transactionActions.setStreak(customer.streak)); // Update streak based on customer
    setCustomerSuggestions(null); // Hide suggestions
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-col mx-auto w-[80%]">
      <label htmlFor="customer" className="tracking-widest">
        Customer Name:
      </label>
      <input
        name="customer"
        id="customer"
        ref={inputRef}
        value={customerInput}
        onChange={handleInputChanges}
        className="border-[2px] border-customBlack p-2 rounded-md text-xl"
      />
      {customerSuggestions && (
        <div
          ref={suggestionRef}
          className="border-2 p-2  border-customBlack border-t-0 max-h-[200px] right-0 bottom-[-60px] left-0 z-10 rounded-br-md rounded-bl-md bg-customOffWhite absolute w-[100%] mx-auto overflow-y-auto"
        >
          {customerSuggestions.length > 0 ? (
            customerSuggestions.map((customer: Customer) => (
              <div
                key={customer._id}
                onClick={() => handleSelectingSuggestion(customer)}
                className="p-2 border-customBlack hover:bg-slate-200 duration-150 transition-all rounded-tl-md rounded-tr-md border-b-2 cursor-pointer"
              >
                {customer.name}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No customers found</div>
          )}
        </div>
      )}
    </div>
  );
}
