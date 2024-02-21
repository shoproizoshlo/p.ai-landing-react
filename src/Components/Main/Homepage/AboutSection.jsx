import "../../../styles/AboutSection.css";

const AboutSection = ({
  imgAboutSection,
  headingAboutSection,
  descriptionAboutSection,
  openModal,
}) => {
  return (
    <div className="p-2 md:p-3 max-w-sm w-full md:w-1/3 flex flex-col items-center rounded bg-[#242424] about-section">
      <div className="h-2 rounded z-2 line"></div>
      <div className="m-5 sm:my-12 sm:mx-6 h-full flex flex-col items-start justify-between content-about-section">
        <div>
          <div className="mb-5 flex flex-row items-center heading-about-section">
            <div>
              <img src={imgAboutSection} alt="" />
            </div>
            <h4 className="ms-4 sm:ms-5 text-white text-xl">
              {headingAboutSection}
            </h4>
          </div>
          <p className="mt-0 text-white">{descriptionAboutSection}</p>
        </div>
        <a onClick={openModal} className="mt-0 text-white">
          View customer stories
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
