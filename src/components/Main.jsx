import bgMain from "../assets/fundo.webp";
import TopBar from "./Topbar";

const Main = () => {
  return (
    <>
      <TopBar />
      <div id="main">
        {/* Backgroud hero */}
        <img src={bgMain} className="w-full h-screen object-cover" alt="/" />

        {/* Container main */}
        <div className="w-full h-screen absolute top-12 left-0 bg-white/50 justify-center">
          <div className="max-w-[850px] m-auto h-96 px-5 w-full absolute bottom-36 md:bottom-36">
            <div className="border-l-4 border-[#283618] p-2">
              <h1 className="text-4xl md:text-6xl font-bold text-[#283618]">
                Estimulação Magnética Transcraniana - EMT.
              </h1>
              <h2 className="text-base mt-2 md:mt-5 md:text-xl md:font-bold text-[#283618]">
                Agende a sua Sessão de EMT e Transforme a sua Saúde Mental
              </h2>
            </div>

            <div className="flex justify-center md:justify-start mt-5">
              <a
                href="https://wa.me/5596991354590"
                target="_blank"
                rel="noreferrer"
              >
                <button className="py-5 w-64 bg-[#283618] text-gray-200">
                  <p className="text-xl">Agende uma sessão</p>
                </button>
              </a>
            </div>
          </div>

          <div className="absolute bottom-20 left-20 md:bottom-14 md:right-20 flex flex-col md:flex-row md:mt-5 justify-center md:justify-end items-center">
            <div className="text-center md:m-3">
              <h2 className="text-sm md:text-lg">
                clinicadracamilaneiva@gmail.com
              </h2>
              <h2 className="text-sm md:text-lg">(96)99135-4590</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
