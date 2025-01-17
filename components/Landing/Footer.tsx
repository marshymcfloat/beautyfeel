"use client";
import FBLogo from "./FBLogo";
export default function Footer() {
  return (
    <footer className=" flex items-center absolute bottom-0 bg-customBlack w-full h-[35px]">
      <div className="flex w-[8%] justify-around">
        <FBLogo />
        <h1 className="uppercase  tracking-widest text-customBGPink">
          beautyfeel
        </h1>
      </div>
    </footer>
  );
}
