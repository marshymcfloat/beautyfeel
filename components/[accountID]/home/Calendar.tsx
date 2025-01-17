export default function Calendar() {
  const currentDate = new Date();

  const getDaySuffix = (day: number) => {
    if (day % 10 === 1 && day !== 11) return "st";
    if (day % 10 === 2 && day !== 12) return "nd";
    if (day % 10 === 3 && day !== 13) return "rd";
    return "th";
  };

  const month = currentDate.toDateString().split(" ")[1];
  const day = currentDate.toDateString().split(" ")[2];

  const suffix = getDaySuffix(parseInt(day));

  return (
    <div className="border-[6px] border-customBlack w-[200px] h-[200px] flex flex-col rounded-lg">
      <div className="">
        <p className="text-4xl font-bold ml-4 mt-2">{month}.</p>
      </div>
      <div className="h-full  flex justify-end  items-end text-center font-bold">
        <p className="text-[96px] mr-4">
          {day}
          <span className="text-xl">{suffix}</span>
        </p>
      </div>
    </div>
  );
}
