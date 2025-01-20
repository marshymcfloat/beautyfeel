type OptionTabProperty = {
  image: string;
  label: string;
  fn: (address: string) => void;
};

export default function OptionTab({ image, label, fn }: OptionTabProperty) {
  return (
    <div
      onClick={() => fn(label.toLowerCase())}
      className="relative flex hover:bg-opacity-0 transition-all duration-150 cursor-pointer items-center shadow-md hover:shadow-xl py-2 w-[95%] justify-evenly my-2 border-b-2 border-customBlack"
    >
      <div className="absolute inset-0 bg-custom-gradient opacity-0 hover:opacity-100 transition-all duration-150 hover:shadow-xl rounded-tr-md rounded-tl-md"></div>
      <div className="relative w-[50px] mr-auto ml-5">
        <img src={image} alt={label} className="w-[20px]" />
      </div>
      <p className="relative text-md mr-6">{label}</p>
    </div>
  );
}
