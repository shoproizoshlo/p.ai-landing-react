import AsosLogo from "../../../assets/asos-logo.svg";
import DominosLogo from "../../../assets/dominos-logo.svg";
import Mindfulchef from "../../../assets/mindfulchef-logo.svg";
import Thg from "../../../assets/thg-logo.svg";
import "../../../styles/Marketers.css";

const Marketers = () => {
  return (
    <div className="marketers">
      <p>Chosen by progressive marketers.</p>
      <div className="marketers-logo">
        <img src={AsosLogo} alt="Asos logo" />
        <img src={DominosLogo} alt="Dominos logo" />
        <img src={Mindfulchef} alt="Mindful Chef logo" />
        <img src={Thg} alt="THG logo" />
      </div>
      <p>Read success stories</p>
    </div>
  );
};

export default Marketers;
