type InputGroupProps = {
  label: string;
  name?: string;
  type?: string;
  id?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function inputGroup({
  label,
  name = label,
  type = "text",
  id = label,
  onChange,
}: InputGroupProps) {
  return (
    <div className="flex flex-col mx-auto w-[60%]">
      <label
        htmlFor={id}
        className="text-md tracking-widest text-customOffWhite"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={true}
        onChange={onChange}
        className="bg-customOffWhite h-[50px] rounded-md px-2 tracking-widest  "
      />
    </div>
  );
}
