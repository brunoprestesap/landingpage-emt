import {
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookSquare,
  FaBars
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full bg-[#283618] lg:h-12 flex justify-between items-center">
        <div className="p-3 flex">
            <h1 className="font-bold text-[#FEFAE0]">Instituto Amparo</h1>
            <h1 className="hidden lg:block text-[#FEFAE0]"> Tel: (96)99135-4590 - E-Mail: clinicadracamilaneiva@gmail.com</h1>
        </div>

        <div className="lg:hidden p-3">
            <FaBars className="text-[#FEFAE0] text-2xl"/>
        </div>
    
        <div className="w-44 p-3 hidden lg:flex justify-around items-center">
            <FaInstagram className="text-[#FEFAE0] text-2xl " />
            <FaEnvelope className="text-[#FEFAE0] text-2xl" />
            <FaWhatsapp className="text-[#FEFAE0] text-2xl" />
            <FaFacebookSquare className="text-[#FEFAE0] text-2xl" />
        </div>
    </div>
  );
};

export default TopBar;
