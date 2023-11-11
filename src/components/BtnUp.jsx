import { FaWhatsapp } from "react-icons/fa";

const BtnUp = () => {
  return (
    <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
      <button
        type="button"
        onClick={() => {}}
        style={{ background: "#03C988", borderRadius: "50%" }}
        className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
      >
        <a href="https://wa.me/5596991354590/?text=Quero%20saber%20mais%20sobre%20o%20tratamento%20com%20EMT" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
      </button>
    </div>
  );
};

export default BtnUp;
