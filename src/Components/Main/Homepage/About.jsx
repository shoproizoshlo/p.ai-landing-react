import AboutSection from "./AboutSection";

import VolumeImg from "../../../assets/volume-about.svg";
import EfficiencyImg from "../../../assets/efficiency-about.svg";
import UpliftImg from "../../../assets/uplift-about.svg";
import Plus from "../../../assets/plus.svg";

import "../../../styles/About.css";

const About = ({ headingAbout, imgAbout }) => {
  return (
    <div className="about">
      <h3>{headingAbout}</h3>
      <div>
        <img src={imgAbout} alt="" />
      </div>
      Components
      <div className="about-sections">
        <AboutSection
          imgAboutSection={VolumeImg}
          headingAboutSection="Volume"
          descriptionAboutSection="Always-on, predictive acquisition and retention. Acquire new and repeat customers across any ad platform, at scale."
        />
        <div className="plus-img">
          <img src={Plus} alt="" />
        </div>
        <AboutSection
          imgAboutSection={EfficiencyImg}
          headingAboutSection="Efficiency"
          descriptionAboutSection="Predictive Audiences that ensure you invest the optimal amount based on every customer’s predicted conversion and customer lifetime value. No waste."
        />
        <div className="plus-img">
          <img src={Plus} alt="" />
        </div>
        <AboutSection
          imgAboutSection={UpliftImg}
          headingAboutSection="Uplift"
          descriptionAboutSection="Prove incrementality using multi-cell lift tests, with holdouts. This is real performance."
        />
      </div>
      <p>We’d love to give you a demo.</p>
      <button>Book a demo</button>
    </div>
  );
};

export default About;
