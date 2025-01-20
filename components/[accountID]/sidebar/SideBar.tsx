"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import OptionTab from "./OptionTab";

type SideBarProps = {
  dialogRef?: React.RefObject<HTMLDialogElement>;
};

export default function SideBar() {
  const [visibility, setVisibility] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const segments = pathname.split("/");
  const accountID = segments[1];

  const router = useRouter();

  function handleVisibility() {
    setVisibility((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setVisibility(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleRouting(address: string) {
    router.push(`/${accountID}/${address}`);
  }

  return (
    <div
      ref={sidebarRef}
      className={
        !visibility
          ? "transition-all duration-100 absolute bg-customOffWhite z-20 left-[-300px] top-2 h-screen w-[300px] border-[10px] border-customBlack rounded-tr-3xl"
          : "transition-all duration-100 absolute left-[-10px] z-20 bg-customOffWhite top-2 h-screen w-[300px] border-[10px] border-customBlack rounded-tr-3xl"
      }
    >
      <div
        onClick={handleVisibility}
        className="absolute right-[-30px] flex justify-center items-center top-[50%] bg-customOffWhite bottom-[50%] border-[5px] border-l-0 rounded-tr-xl rounded-br-xl border-customBlack w-[20px] h-[70px]"
      >
        <div className="w-[5px] h-[70%] rounded-2xl bg-black"></div>
      </div>
      <h1 className="text-center my-8 font-bold tracking-[5px] uppercase text-3xl">
        beautyfeel
      </h1>
      <div className="flex flex-col my-6 items-center ">
        <OptionTab
          label={"Home"}
          image={"/sidebar-icons/home-icon.png"}
          fn={handleRouting}
        />
        <OptionTab
          label={"Cashier"}
          image={"/sidebar-icons/cashier-icon.png"}
          fn={handleRouting}
        />
        <OptionTab
          label={"Work"}
          image={"/sidebar-icons/work-icon.png"}
          fn={handleRouting}
        />
        <OptionTab
          label={"Services"}
          image={"/sidebar-icons/services-icon.png"}
          fn={handleRouting}
        />
        <OptionTab
          label={"Log out"}
          image={"/sidebar-icons/logout-icon.png"}
          fn={handleRouting}
        />
      </div>
    </div>
  );
}
