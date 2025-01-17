export default function CustomerStreak() {
  return (
    <div className="w-[80%] bg-customBlack h-[5px] mx-auto my-4 flex justify-between items-center">
      <div className="w-[20px] relative h-[20px] rounded-full border-[4px] border-customBlack bg-customOffWhite">
        <p className="absolute bottom-[-40px] right-[-5px]">
          <span>&#8369;</span>0
        </p>
      </div>
      <div className="w-[20px] relative h-[20px] rounded-full border-[4px] border-customBlack bg-customOffWhite">
        <p className="absolute bottom-[-40px] right-[-5px]">
          <span>&#8369;</span>10
        </p>
      </div>{" "}
      <div className="w-[20px] relative h-[20px] rounded-full border-[4px] border-customBlack bg-customOffWhite">
        <p className="absolute bottom-[-40px] right-[-5px]">
          <span>&#8369;</span>20
        </p>
      </div>
      <div className="w-[20px] relative h-[20px] rounded-full border-[4px] border-customBlack bg-customOffWhite">
        <p className="absolute bottom-[-40px] right-[-5px]">
          <span>&#8369;</span>30
        </p>
      </div>
    </div>
  );
}
