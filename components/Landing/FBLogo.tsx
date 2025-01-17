import Image from "next/image";

export default function FBLogo() {
  return (
    <div className="w-[25px]  h-[25px] rounded-full border-2 flex justify-center items-center border-customBGPink">
      <img src="fb-logo.png" alt="facebook-logo" className="w-[15px]" />
    </div>
  );
}
