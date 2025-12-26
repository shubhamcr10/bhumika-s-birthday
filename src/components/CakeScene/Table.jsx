export default function Table({ children }) {
  return (
    <div
      className="
        absolute bottom-0 w-full h-[45%]
        flex flex-col
      "
    >
      {/* Table top */}
      <div className="h-[65%] bg-[#2b2b2b] flex items-end justify-center">
        {/* CONTENT GOES HERE */}
        <div className="flex items-end justify-center gap-24 pb-10">
          {children}
        </div>
      </div>

      {/* Table front */}
      <div className="h-[35%] bg-[#1e1e1e]" />
    </div>
  );
}
