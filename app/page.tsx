import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import aboutData from "./components/DataArray/Data";


const Home = () => {
  return (
    <main>
      <Hero />
      {/* ໃຊ້ .map() ເພື່ອວາງ Component ອັດຕະໂນມັດ */}
      {
        aboutData.map((item,index)=>(
          <About
          key={index}
          title={item.title}
          subTitle={item.subTitle}
          description={item.description}
          image={item.image}
          type={item.type as "A" | "B"}
          />
        ))
      }
      
       
    </main>
  );
};

export default Home;
