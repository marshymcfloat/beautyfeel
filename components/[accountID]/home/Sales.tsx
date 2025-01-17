import LabelY from "./Charts/LabelY";
import LabelX from "./Charts/LabelX"; // Use if needed or remove it.
import ChartBody from "./Charts/ChartBody";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 700 },
  { name: "May", sales: 1000 },
  { name: "June", sales: 800 },
];

export default function Sales() {
  return (
    <div className="w-full h-full flex justify-center items-center relative z-0">
      <LabelY data={data} />
      <LabelY data={data} right={true} />

      <ChartBody />
      <LabelX data={data} />
    </div>
  );
}
