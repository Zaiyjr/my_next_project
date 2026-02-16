"use client"; // ຕ້ອງໃສ່ບັດທັດທຳອິດສຸດ ເພາະ Lottie ໃຊ້ JavaScript ຝັ່ງ Client
import Lottie from "lottie-react";
import Image from "next/image";
interface AboutProps {
  title: string;
  subTitle: string;
  description: string;
  image: any;
  type: "A" | "B";
}
const About = ({ title, subTitle, description, image, type }: AboutProps) => {
    // ສ້າງ Function ເພື່ອເຊັກວ່າ image ທີ່ສົ່ງມາເປັນ Lottie ຫຼື ຮູບພາບທຳມະດາ
  const renderVisual = () => {
    if (typeof image === "object") {
      // ຖ້າເປັນ Object ໃຫ້ໃຊ້ Lottie
      return <Lottie animationData={image} loop={true} className="w-full h-full" />;
    }
    // ຖ້າເປັນ String ໃຫ້ໃຊ້ Image ປົກກະຕິ
    return <Image src={image} alt="About Icon" fill className="object-contain" />;
  };
  return (
   <main className="py-12">
      {/* ໃຊ້ w-96 ແທນ max-w-96 ເພື່ອໃຫ້ div ມີເນື້ອທີ່ */}
      <div className="container mx-auto flex flex-row justify-center items-center">
      {type === "B" && (
        <div className="relative w-96 h-96 shrink-0 animate-bounce">
          {/* <Image src={image} alt="About Icon" fill className="object-contain  animate-bounce" /> */}
         {renderVisual()}
        </div>
      )}

      <div className="max-w-2xl ">
        <h3 className="text-3xl font-extrabold text-sky-600 pb-4">{title}</h3>
        <h2 className="text-6xl font-bold pb-6">{subTitle}</h2>
        <p className="text-xl text-gray-500">{description}</p>
      </div>

      {type === "A" && (
        <div className="relative w-96 h-96 shrink-0 animate-pulse"> {/*shrink-0 ເພື່ອປ້ອງກັນບໍ່ໃຫ້ຮູບຖືກບີບເວລາຂໍ້ຄວາມຍາວເກີນໄປ*/}
         {renderVisual()}
        </div>
      )}
      </div>
    
    </main>
  );
};
export default About;
