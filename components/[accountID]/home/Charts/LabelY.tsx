export type LabelYProps = {
  data: { name: string; sales: number }[];
  right?: boolean;
};

export default function LabelY({ data, right }: LabelYProps) {
  const sortedData = [...data].sort((a, b) => b.sales - a.sales);

  const style = right
    ? "flex flex-col items-center justify-evenly absolute right-0  h-full mr-2"
    : "flex flex-col items-center justify-evenly absolute left-0  h-full ml-2";

  return (
    <div className={style}>
      {sortedData.map((label) => (
        <span key={label.name}>{label.sales}</span>
      ))}
    </div>
  );
}
