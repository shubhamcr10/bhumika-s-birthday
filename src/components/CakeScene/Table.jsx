export default function Table({ children }) {
  return (
    <div className="absolute bottom-0 w-full h-[45%] flex flex-col">
      {/* Table top */}
      <div className="h-[65%] bg-[#2b2b2b]" />

      {/* Table front */}
      <div className="h-[35%] bg-[#1e1e1e]" />

      {/* Content layer */}
      <div className="absolute inset-0 flex items-end justify-center pb-12">
        <div className="flex items-end gap-20">
          {children}
        </div>
      </div>
    </div>
  );
}
