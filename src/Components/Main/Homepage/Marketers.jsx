import AsosLogo from "../../../assets/asos-logo.svg";
import DominosLogo from "../../../assets/dominos-logo.svg";
import Mindfulchef from "../../../assets/mindfulchef-logo.svg";
import Thg from "../../../assets/thg-logo.svg";
import "../../../styles/Marketers.css";

const Marketers = () => {
  return (
    <div className="marketers-container">
      <div className="marketers">
        <p>Chosen by progressive marketers.</p>
        <div className="marketers-logo">
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
        <p>Read success stories</p>
      </div>
    </div>
  );
};

export default Marketers;
