import React from "react";

/* import { FaInstagram } from "react-icons/fa"; */
/* import imgAbout from "../assets/IMG_0330.jpeg"; */

const About = () => {
  return (
    <div className="flex flex-col w-full lg:justify-center lg:flex-row md:mb-5">
      <div id="about" className="w-full p-5">
        <div className="border-l-4 border-[#283618]">
          <h2 className="font-bold text-5xl ml-3 md:text-6xl md:font-bold text-[#283618]">
            Sobre
            <br />
            A Estimulação Magnética
            <br />
            Transcraniana - EMT
          </h2>
        </div>

        <p className="text-sm md:text-lg leading-7 my-5">
            A Estimulação Magnética Transcraniana (EMT) é uma técnica terapêutica não invasiva que envolve a aplicação de campos magnéticos 
            focados no cérebro. Esses campos magnéticos emitem pulsos magnéticos, induzindo correntes elétricas breves e direcionadas no cérebro. 
            A EMT é usada para influenciar a atividade neural em áreas específicas do cérebro e é aplicada no tratamento de diversas condições médicas, 
            neuropsiquiátricas e neurológicas. É uma terapia personalizável e adaptável, administrada por profissionais de saúde qualificados.
        </p>

      </div>
    </div>
  );
};

export default About;
