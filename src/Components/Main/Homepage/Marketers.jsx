import AsosLogo from "../../../assets/asos-logo.svg";
import DominosLogo from "../../../assets/dominos-logo.svg";
import Mindfulchef from "../../../assets/mindfulchef-logo.svg";
import Thg from "../../../assets/thg-logo.svg";
import "../../../styles/Marketers.css";

const Marketers = ({ openModal }) => {
  return (
    <div className="py-16 px-5 sm:py-28 sm:px-10 lg:p-28 bg-black">
      <div className="max-w-7xl w-g w-full my-0 mx-auto flex flex-col items-center marketers">
        <p>Chosen by progressive marketers.</p>
        <div className="my-12 mx-0 flex flex-col md:flex-row justify-between marketers-logo">
          <div>
            <img src={AsosLogo} alt="Asos logo" />
          </div>
          <div>
            <img src={DominosLogo} alt="Dominos logo" />
          </div>
          <div>
            <img src={Mindfulchef} alt="Mindful Chef logo" />
          </div>
          <div>
            <img src={Thg} alt="THG logo" />
          </div>
        </div>
        <p>
          <a onClick={openModal} className="text-white">
            Read success stories
          </a>
        </p>
      </div>
    </div>
  );
};

export default Marketers;
