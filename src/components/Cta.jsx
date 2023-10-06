import React from "react";
import imgCta from "../assets/logo.png";

const Cta = () => {
  return (
    <div className="bg-[#FEFAE0] p-8">
      <div className="p-12 border border-[#A86A24] flex flex-col justify-center items-center">
        <img src={imgCta} alt="/" className="rounded-full w-48 h-32" />
        <h2 className="text-[#283618] text-3xl md:text-xl text-center lg:text-2xl font-bold my-8 md:mx-12">
          Pronto pra transformar a sua saúde mental?
        </h2>
        <a href="https://wa.me/5596991354590" target="_blank" rel="noreferrer">
          <button className="p-5 bg-[#283618] text-lg w-full md:w-64 text-[#FEFAE0] hover:bg-[#606C38]">
            Agende uma sessão
          </button>
        </a>
      </div>
    </div>
  );
};

export default Cta;