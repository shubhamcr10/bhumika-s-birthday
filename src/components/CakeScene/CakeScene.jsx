import { motion } from "framer-motion";
import Table from "./Table";
import PhotoFrame from "./PhotoFrame";
import Cake from "./Cake";
import { photos } from "./cakeData";

export default function CakeScene() {
  return (
    <div className="h-screen w-full relative bg-black overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

      {/* Table + items */}
      <Table>
        {/* Photos */}
        {photos.map((photo, i) => (
          <PhotoFrame
            key={photo.id}
            src={photo.src}
            style={photo.position}
            delay={0.6 + i * 0.2}
          />
        ))}

        {/* Cake in center */}
        <div className="absolute bottom-[22%] flex justify-center w-full">
          <Cake />
        </div>
      </Table>
    </div>
  );
}
