import LandingButton from "@/components/Landing/LandingButton";
export default function Home() {
  return (
    <>
      <main className="h-screen bg-custom-gradient bg-[length:200%_200%] animate-gradient flex justify-center items-center">
        <div className="flex flex-col">
          <p className="text-[2rem] tracking-[5px] text-center mb-2 text-customBlack">
            Your Beauty, Our Passion
          </p>
          <h1 className="border-t-2 border-customBlack text-customBlack text-[96px] uppercase tracking-[60px]">
            BeautyFeel
          </h1>
          <div className="w-[80%] mt-12 mx-auto flex justify-around">
            <LandingButton>Services</LandingButton>
            <LandingButton>Book</LandingButton>
          </div>
        </div>
      </main>
    </>
  );
}
