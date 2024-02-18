import AboutSection from "./AboutSection";
import Review from "./Review";

import VolumeImg from "../../../assets/volume-about.svg";
import EfficiencyImg from "../../../assets/efficiency-about.svg";
import UpliftImg from "../../../assets/uplift-about.svg";
import Plus from "../../../assets/plus.svg";
import CompanyName from "../../../assets/company-review.svg";

import "../../../styles/About.css";

const About = ({ headingAbout, imgAbout, openModal, closeModal }) => {
  return (
    <div className="py-24 flex flex-col items-center bg-black about">
      <div className="max-w-7xl w-full my-0 mx-auto pt-0 pb-0 ps-5 pe-5 flex flex-col items-center about-heading">
        <h3>{headingAbout}</h3>
        <div className="hidden md:block my-0 md:mx-20 lg:mx-auto relative overflow-hidden about-heading-img">
          <img
            src={imgAbout}
            alt="about img"
            className="w-full h-full relative inset-0 object-contain object-center"
          />
        </div>

        <div className="mt-12 md:mt-0 mb-24 flex flex-col md:flex-row items-center md:items-start justify-between about-sections">
          <AboutSection
            imgAboutSection={VolumeImg}
            openModal={openModal}
            closeModal={closeModal}
            headingAboutSection="Volume"
            descriptionAboutSection="Always-on, predictive acquisition and retention. Acquire new and repeat customers across any ad platform, at scale."
          />
          <div className="plus-img">
            <img src={Plus} alt="" />
          </div>
          <AboutSection
            imgAboutSection={EfficiencyImg}
            openModal={openModal}
            closeModal={closeModal}
            headingAboutSection="Efficiency"
            descriptionAboutSection="Predictive Audiences that ensure you invest the optimal amount based on every customer’s predicted conversion and customer lifetime value. No waste."
          />
          <div className="plus-img">
            <img src={Plus} alt="" />
          </div>
          <AboutSection
            imgAboutSection={UpliftImg}
            openModal={openModal}
            closeModal={closeModal}
            headingAboutSection="Uplift"
            descriptionAboutSection="Prove incrementality using multi-cell lift tests, with holdouts. This is real performance."
          />
        </div>
      </div>
      <Review
        companyName={CompanyName}
        reviewText="This magical product actually works! P.ai has radically changed the way we build our audiences at Treatwell. Increasing new customer sales by 6x"
        reviewerName="Albert Abello"
        reviewerTitle="Director of Growth, Treatwell"
      />
      <div className="demo">
        <p>We’d love to give you a demo.</p>
        <button type="button" onClick={openModal}>
          Book a demo
        </button>
      </div>
    </div>
  );
};

export default About;
