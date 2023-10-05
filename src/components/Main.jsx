import bgMain from "../assets/fundo.webp";

const Main = () => {
  return (
    <div id="main">
      {/* Backgroud hero */}
      <img src={bgMain} className="w-full h-screen object-cover" alt="/" />

      {/* Container main */}
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 justify-center">
        <div className="w-full p-5">
          <h1 className="text-3xl font-bold text-blue-900">Instituto Amparo</h1>
        </div>

        <div className="max-w-[850px] m-auto h-96 px-5 w-full absolute bottom-28 md:bottom-24">
          <div className="border-l-4 border-blue-800 p-2">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-800">
              Estimulação Magnética Transcraniana - EMT.
            </h1>
            <h2 className="text-base mt-2 md:mt-5 md:text-xl md:font-bold text-blue-900">
              Agende a sua Sessão de EMT e Transforme a sua Saúde Mental
            </h2>
          </div>

          <div className="flex justify-center md:justify-start mt-5">
            <a
              href="https://wa.me/5596991354590"
              target="_blank"
              rel="noreferrer"
            >
              <button className="py-5 w-64 bg-slate-900 text-gray-200">
                <p className="text-xl">Agende uma sessão</p>
              </button>
            </a>
          </div>
        </div>

        <div className="absolute bottom-2 left-24 md:bottom-4 md:right-4 flex flex-col md:flex-row md:mt-5 justify-center md:justify-end items-center">
          <div className="text-center md:m-3">
            <h2 className="text-sm md:text-lg">
              clinicadracamilaneiva@gmail.com
            </h2>
            <h2 className="text-sm md:text-lg">(96)99135-4590</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
