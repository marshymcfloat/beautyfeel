"use client";

import { RootState } from "@/components/Provider/ReduxProvider";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { transactionActions } from "@/components/Provider/Slices/TransactionSlice";

type Service = {
  _id: string;
  title: string;
  branch: string;
  price: number;
};

type ServiceSelectGroupProps = {
  label: string;
};

export default function ServiceSelectGroup({ label }: ServiceSelectGroupProps) {
  const dispatch = useDispatch();
  const [suggestionVisibility, setSuggestionVisibility] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleVisibility() {
    setSuggestionVisibility((prev) => !prev);
  }

  const branch = useSelector((state: RootState) => state.transaction.branch);
  const availedServices = useSelector(
    (state: RootState) => state.transaction.services
  );

  const services: Service[] = useSelector(
    (state: RootState) => state.dashboard.services
  );

  const filteredServices = services.filter(
    (service) => service.branch === branch
  );

  function handleSelectingServices(service: {
    title: string;
    price: number;
  }): void {
    dispatch(
      transactionActions.setAvailedServices({
        title: service.title,
        quantity: 1,
        price: service.price,
      })
    );
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSuggestionVisibility(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="w-[220px]">
      <label>{label}</label>
      <div
        onClick={handleVisibility}
        className="relative p-2 flex justify-between bg-customOffWhite w-[220px] h-[47px] max-w-[220px] border-2 border-customBlack rounded-md cursor-pointer"
      >
        <h1>Services</h1>
        <div className="font-bold text-lg rotate-90">&gt;</div>
      </div>

      <div
        className={`absolute w-[220px] border-customBlack overflow-y-auto border-2 border-t-0 rounded-md bg-customOffWhite overflow-hidden transition-all duration-300 ease-in-out ${suggestionVisibility ? "opacity-100 max-h-[200px]" : "opacity-0 h-[0]"
          }`}
      >
        {filteredServices.length === 0 && (
          <div className="p-2 text-center tracking-widest ">
            <p>no services</p>
          </div>
        )}
        {filteredServices.length > 0 &&
          filteredServices.map((service) => (
            <div
              className={
                availedServices.find(
                  (selected) => selected.title === service.title
                )
                  ? "p-2 m-1 rounded bg-gray-700 text-customOffWhite transition-all duration-150 cursor-pointer"
                  : "p-2 m-1 hover:bg-gray-300 cursor-pointer transition-all duration-150"
              }
              key={service._id}
              onClick={() => {
                handleSelectingServices({
                  title: service.title,
                  price: service.price,
                });
              }}
            >
              {service.title}
            </div>
          ))}
      </div>
    </div>
  );
}
