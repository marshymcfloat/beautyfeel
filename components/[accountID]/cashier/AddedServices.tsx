export default function AddedServices() {
  return (
    <div className="flex items-center bg-customOffWhite rounded-lg py-2 my-2">
      <div className="w-[10%] font-bold flex justify-center items-center ">
        <p>5x</p>
      </div>
      <div className="flex flex-col w-[60%] ">
        <div className="tracking-widest">
          <p>manicure service 01</p>
        </div>
        <div className=" ">
          <p>P500</p>
        </div>
      </div>
      <div className="flex w-[20%] justify-around items-center">
        <button
          type="button"
          className="w-[20px] h-[20px]  border-2 border-customBlack rounded-md flex justify-center items-center"
        >
          -
        </button>
        <button
          type="button"
          className="w-[20px] h-[20px] border-2 bg-customBlack text-customOffWhite border-customBlack rounded-md flex justify-center items-center"
        >
          +
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">P1200</div>
    </div>
  );
}
