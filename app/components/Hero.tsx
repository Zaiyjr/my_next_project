import React from 'react'

const Hero = () => {
  return (
    <div className=" relative  h-screen w-full bg-black">
          <div className="absolute inset-0 h-screen w-full bg-[url('/images/coding-1.jpg')]  bg-cover bg-center opacity-50 "></div>
        
          {/* 2. Layer ຂອງເນື້ອໃນ: ຢູ່ເຄິ່ງກາງ ແລະ ສີເຂັ້ມປົກກະຕິ */}
          <div className="text-center z-10 h-full flex justify-center items-center flex-col gap-6">
            <h2 className="font-bold text-6xl text-sky-500 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_40%)] animate-pulse">
              ສ້າງສັນນະວັດຕະກຳໃໝ່ ເພື່ອອະນາຄົດທີ່ດີກວ່າ
            </h2>
            <p className="max-w-l text-white drop-shadow-lg">
             ຍົກລະດັບການເຮັດວຽກຂອງທ່ານດ້ວຍລະບົບອັດສະລິຍະ ທີ່ຖືກອອກແບບມາເພື່ອຄວາມງ່າຍດາຍ ແລະ ຄວາມປອດໄພໃນການໃຊ້ງານ.
            </p>
          </div>
       
        </div>
  )
}

export default Hero
