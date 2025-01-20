"use client";

import { RootState } from "@/components/Provider/ReduxProvider";
import { useState } from "react";
import { useSelector } from "react-redux";

type Service = {
  _id: string;
  title: string;
};

type ServiceSelectGroupProps = {
  label: string;
};

export default function ServiceSelectGroup({ label }: ServiceSelectGroupProps) {
  const [suggestionVisibility, setSuggestionVisibility] = useState(false);

  function handleVisibility() {
    setSuggestionVisibility((prev) => !prev);
  }

  const services: Service[] = useSelector(
    (state: RootState) => state.dashboard.services
  );

  return (
    <div className="w-[220px] ">
      <label>{label}</label>
      <div
        onClick={handleVisibility}
        className="relative p-2 flex justify-between bg-customOffWhite w-[220px] h-[47px] max-w-[220px] border-2 border-customBlack rounded-md cursor-pointer"
      >
        <h1>Services</h1>
        <div className="font-bold text-lg rotate-90">&gt;</div>
      </div>

      <div
        className={`absolute w-[220px] border-customBlack overflow-y-auto border-2 border-t-0 rounded-md bg-customOffWhite overflow-hidden transition-all duration-300 ease-in-out ${
          suggestionVisibility ? "opacity-100 h-[200px]" : "opacity-0 h-[0]"
        }`}
      >
        {services.map((service) => (
          <div
            className="p-2 hover:bg-gray-300 transition-all duration-150"
            key={service._id}
          >
            {service.title}
          </div>
        ))}
      </div>
    </div>
  );
}
