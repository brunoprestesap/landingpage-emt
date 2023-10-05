import ServiceItem from "./ServiceItem";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Tratamento da depressão resistente",
      desc: "A EMT tem se mostrado eficaz no tratamento de depressão que não responde a outros tratamentos, proporcionando alívio dos sintomas depressivos.",
    },
    {
      id: 2,
      title: "Redução de sintomas de ansiedade:",
      desc: "Em alguns casos, a EMT tem demonstrado reduzir os sintomas de transtornos de ansiedade, como o transtorno de ansiedade generalizada (TAG).",
    },
    {
      id: 3,
      title: "Tratamento de enxaquecas",
      desc: "A EMT pode ser eficaz na redução da frequência e da intensidade das enxaquecas, oferecendo alívio a pacientes que sofrem dessas dores de cabeça debilitantes.",
    },
    {
      id: 4,
      title: "Gerenciamento da dor crônica",
      desc: "Em algumas condições, a EMT tem sido usada para aliviar a dor crônica, como a dor neuropática",
    },
    {
      id: 5,
      title: "Tratamento de transtornos neuropsiquiátricos",
      desc: "A EMT é investigada como uma opção terapêutica para uma variedade de transtornos neuropsiquiátricos, incluindo esquizofrenia, transtorno do estresse pós-traumático (TEPT) e transtorno obsessivo-compulsivo (TOC).",
    },
    {
      id: 6,
      title: "Possibilidade de tratamento personalizado",
      desc: "A EMT permite a focalização em áreas específicas do cérebro, tornando possível adaptar os tratamentos às necessidades individuais dos pacientes.",
    },
    {
      id: 7,
      title: "Terapia não invasiva",
      desc: "A EMT é não invasiva, o que significa que não envolve cirurgia nem procedimentos dolorosos, tornando-a uma opção atraente para muitos pacientes",
    },
  ];

  return (
    <div id="services">
      <div className="bg-blue-900 px-5 py-8 grid grid-cols-1 xl:grid-cols-2">
        <div className="w-full xl:px-16">
          <div className="border-l-2 border-stone-100 p-5">
            <h2 className="text-stone-200 font-bold text-4xl md:text-6xl">
              Quais os
              <br />
              Benefícios?
            </h2>
          </div>

          <div className="px-5 pt-8">
            <h2 className="text-base md:text-lg text-stone-200 landing-7">
              A Estimulação Magnética Transcraniana (EMT) é uma técnica médica não invasiva 
              que envolve a aplicação de campos magnéticos focados no cérebro
              para influenciar a atividade cerebral. Eis uma breve explicação sobre como
              a EMT funciona e os benefícios que os visitantes podem esperar:
            </h2>

            <h2 className="text-base font-bold text-stone-200 mt-5">
              Como a EMT funciona:
            </h2>

            <p className="text-base text-stone-200 mt-5">
              A EMT utiliza uma bobina magnética para gerar pulsos magnéticos de alta intensidade, que são direcionados para áreas específicas do cérebro. Esses pulsos magnéticos induzem correntes elétricas breves e focadas no cérebro, estimulando ou inibindo a atividade neuronal nas áreas-alvo.
            </p>

            <h2 className="text-base font-bold text-stone-200 mt-5">Benefícios potenciais da EMT:</h2>

            <p className="text-base text-stone-200 mt-5">A Estimulação Magnética Transcraniana é usada para uma variedade de finalidades terapêuticas e pode oferecer os seguintes benefícios:</p>
            
          </div>
        </div>

        <div className="w-full xl:px-16 px-5">
          {services.map((e) => {
            return <ServiceItem id={e.id} title={e.title} desc={e.desc} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
