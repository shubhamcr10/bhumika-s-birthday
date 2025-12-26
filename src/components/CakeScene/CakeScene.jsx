import Table from "./Table";
import PhotoFrame from "./PhotoFrame";
import Cake from "./Cake";

export default function CakeScene() {
  return (
    <div className="h-screen w-full bg-black relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

      {/* Table Scene */}
      <Table>
        {/* Photos */}
        <div className="flex gap-8 mb-6">
          <PhotoFrame src="img1.jpg" x={-120} delay={0.6} />
          <PhotoFrame src="img2.jpg" x={0} delay={0.8} />
          <PhotoFrame src="img1.jpg" x={120} delay={1.0} />
        </div>

        {/* Cake */}
        <div className="absolute bottom-[60px] flex justify-center w-full">
          <Cake />
        </div>
      </Table>
    </div>
  );
}
