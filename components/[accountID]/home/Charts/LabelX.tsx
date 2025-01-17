export type LabelXProps = { data: { name: string; sales: number }[] };

export default function LabelX({ data }: LabelXProps) {
  return (
    <div className="absolute w-full bottom-[-30px] text-customOffWhite">
      <div className="w-[90%] flex justify-evenly mx-auto ">
        {data.map((label) => (
          <span key={label.name} className="w-[13%] text-center">
            {label.name}
          </span>
        ))}
      </div>
    </div>
  );
}
