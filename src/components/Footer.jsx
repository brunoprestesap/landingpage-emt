
const Footer = () => {
  return (
    <div id="footer">
      <div className="bg-[#283618] p-5 md:p-12 w-full grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:mx-8">
          <div className="border-[#FEFAE0] border-l-2">
            <h2 className="text-[#FEFAE0] ml-5 text-4xl font-bold">
              Pronto pra cuidar da sua mente?
            </h2>
          </div>
          <div className="flex justify-center w-full">
            <a
              href="https://wa.me/559699135-4590"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-5 bg-[#606c38] w-full my-5">
                <h2 className="text-2xl text-[#FEFAE0]">Agende uma sessão</h2>
              </button>
            </a>
          </div>
        </div>

        <div className="w-full lg:mx-8">
          <div className="w-full mb-5">
            <h2 className="text-[#FEFAE0] text-2xl font-bold">Contate-nos</h2>
          </div>
          <div className="w-full">
            <h2 className="text-[#FEFAE0] text-xl">
              clinicadracamilaneiva@gmail.com
            </h2>
            <h2 className="text-[#FEFAE0] text-xl my-3">+55(96)99135-4590</h2>
            <h2 className="text-[#FEFAE0] text-xl">
              Instituto AMPARO - Av. Ataíde Teive, 1217, 1º Andar, Sala nº 3 -
              Centro, Macapá - Amapá
            </h2>
          </div>
        </div>

        <div className="my-5 lg:mx-8 lg:my-0">
          <h2 className="text-[#FEFAE0] text-lg mb-3">Home</h2>
          
        </div>
      </div>
      <div className="bg-[#FEFAE0] p-5 w-full flex flex-col justify-center items-center">
        {/*  <img src={logo} alt="logo rodapé" className="w-24" /> */}
        <h2 className="text-sm text-[#283618] my-5 text-center">
          Copyright © 2023 by Instituto Amparo. Todos os direitos
          reservados.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
