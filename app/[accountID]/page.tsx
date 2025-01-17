"use client";

import Calendar from "@/components/[accountID]/home/Calendar";
import { use } from "react";
import TransactionCount from "@/components/[accountID]/home/TransactionCount";
import { useQuery } from "@tanstack/react-query";
import SideBar from "@/components/[accountID]/sidebar/SideBar";
import Sales from "@/components/[accountID]/home/Sales";
import RecentTransactions from "@/components/[accountID]/home/RecentTransactions";
import { transactionsActions } from "@/components/Provider/Slices/dashboardSlices";
import { useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import TopCustomer from "@/components/[accountID]/home/TopCustomer";
import CreateTransaction from "@/components/[accountID]/cashier/CreateTransaction";

interface DashboardPageProps {
  params: Promise<{ accountID: string }>;
}

export default function DashboardPage({ params }: DashboardPageProps) {
  const [cashierVisible, setCashierVisible] = useState(false);
  const { accountID } = use(params);
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await fetch(`/api/${accountID}`);
    if (!response.ok) {
      throw new Error("There is an error in fetching transactions count");
    }
    return await response.json();
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["transaction", accountID],
    queryFn: getData,
    enabled: !!accountID,
  });

  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (data) {
      dispatch(transactionsActions.addTransactions(data.transactions));
    }
  }, [data, dispatch]);

  return (
    <main className="h-screen flex justify-center items-center">
      <SideBar />
      {cashierVisible && <CreateTransaction visibilityFn={setCashierVisible} />}
      <div className="w-[90%] h-[85%] flex ">
        <div className="flex flex-col w-[40%] mx-2 h-full">
          <div className="h-[30%]  flex justify-around items-center">
            <Calendar />
            <TransactionCount />
          </div>
          <div className=" h-[70%] flex justify-center items-center ">
            <div className="w-[90%] h-[90%] bg-customBlack rounded-md flex flex-col">
              <h1 className="text-center text-4xl text-customOffWhite mt-4">
                Sales
              </h1>
              <div className="h-[80%] w-[90%] mx-auto mt-2 ">
                <Sales />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-[30%] mx-2 bg-customBlack flex flex-col">
          <RecentTransactions />
          {data?.topCustomers && (
            <TopCustomer topCustomer={data.topCustomers} />
          )}
        </div>
        <div className="h-full w-[40%] mx-2 bg-customBlack"></div>
      </div>
    </main>
  );
}
