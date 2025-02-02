type TextInputGroup = {
  label: string;
  name?: string;
  id?: string;
  type?: string;
};

export default function TextInputGroup({
  label,
  name = label,
  id = label,
  type = "text",
}: TextInputGroup) {
  return (
    <div className="flex flex-col w-[220px] ">
      <label htmlFor={id} className="tracking-widest  ">
        {label}:
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="border-[2px] border-customBlack p-2 bg-customOffWhite rounded-md text-xl  "
      />
    </div>
  );
}
