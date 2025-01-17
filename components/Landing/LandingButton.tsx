export default function LandingButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="hover:text-customBGPink  transition-all duration-150 hover:bg-customBlack border-2 text-customBlack border-customBlack px-2 py-1 rounded min-w-[120px] ">
      {children}
    </button>
  );
}
