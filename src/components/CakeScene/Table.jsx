export default function Table({ children }) {
  return (
    <div className="absolute bottom-0 w-full h-[45%]">
      {/* Table surface */}
      <div className="absolute bottom-0 w-full h-[65%] bg-[#2b2b2b]" />

      {/* Table front */}
      <div className="absolute bottom-0 w-full h-[35%] bg-[#1e1e1e]" />

      {/* Content on table */}
      <div className="relative h-full flex items-end justify-center pb-10 gap-12">
        {children}
      </div>
    </div>
  );
}
