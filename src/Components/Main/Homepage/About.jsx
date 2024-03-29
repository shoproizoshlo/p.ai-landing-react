import { Link } from "react-router-dom";

import AboutSection from "./AboutSection";
import Review from "./Review";

import VolumeImg from "../../../assets/volume-about.svg";
import EfficiencyImg from "../../../assets/efficiency-about.svg";
import UpliftImg from "../../../assets/uplift-about.svg";
import Plus from "../../../assets/plus.svg";
import CompanyName from "../../../assets/company-review.svg";

import "../../../styles/About.css";

const About = ({ headingAbout, imgAbout, openModal }) => {
  return (
    <div className="py-24 flex flex-col items-center bg-black about">
      <div className="max-w-7xl w-full my-0 mx-auto pt-0 pb-0 ps-5 pe-5 flex flex-col items-center about-heading">
        <h3 className="my-0 max-w-3xl text-white text-center text-2xl sm:text-5xl lg:text-6xl">
          {headingAbout}
        </h3>
        <div className="hidden md:block my-0 md:mx-20 lg:mx-auto relative overflow-hidden">
          <img
            src={imgAbout}
            alt="about img"
            className="w-full h-full relative inset-0 object-contain object-center"
          />
        </div>

        <div className="mt-12 md:mt-0 mb-24 flex flex-col md:flex-row items-center md:items-start justify-between">
          <AboutSection
            imgAboutSection={VolumeImg}
            openModal={openModal}
            headingAboutSection="Volume"
            descriptionAboutSection="Always-on, predictive acquisition and retention. Acquire new and repeat customers across any ad platform, at scale."
          />
          <div className="relative h-16 md:h-80 w-auto md:w-12 lg:w-16 plus-img">
            <img
              src={Plus}
              alt="plus img"
              className="relative inset-0 md:top-1/2 md:w-full md:h-auto z-2"
            />
          </div>
          <AboutSection
            imgAboutSection={EfficiencyImg}
            openModal={openModal}
            headingAboutSection="Efficiency"
            descriptionAboutSection="Predictive Audiences that ensure you invest the optimal amount based on every customer’s predicted conversion and customer lifetime value. No waste."
          />
          <div className="relative h-16 md:h-80 w-auto md:w-12 lg:w-16 plus-img">
            <img
              src={Plus}
              alt="plus img"
              className="relative inset-0 md:top-1/2 md:w-full md:h-auto z-2"
            />
          </div>
          <AboutSection
            imgAboutSection={UpliftImg}
            openModal={openModal}
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
      <div className="mt-24 py-0 px-5 md:p-0 max-w-7xl w-full demo">
        <p className="my-0 text-white text-center text-xl md:text-4xl">
          We’d love to give you a demo.
        </p>
        <button
          type="button"
          onClick={openModal}
          className="w-full h-14 mt-14 mx-auto block bg-white text-black text-base rounded"
        >
          <Link to="/">Book a demo</Link>
        </button>
      </div>
    </div>
  );
};

export default About;
