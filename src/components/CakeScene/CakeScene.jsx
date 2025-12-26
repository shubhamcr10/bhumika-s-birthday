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
        <PhotoFrame src="img1.jpg" rotate={-6} />
        <Cake />
        <PhotoFrame src="img2.jpg" rotate={6} />
      </Table>

    </div>
  );
}
