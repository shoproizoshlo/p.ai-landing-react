import "../../../styles/AboutSection.css";

const AboutSection = ({
  imgAboutSection,
  headingAboutSection,
  descriptionAboutSection,
  openModal,
  closeModal,
}) => {
  return (
    <div className="p-2 md:p-3 max-w-sm w-full md:w-1/3 flex flex-col items-center rounded about-section">
      <div className="h-2 rounded z-2 line"></div>
      <div className="m-5 sm:my-12 sm:mx-6 h-full flex flex-col items-start justify-between content-about-section">
        <div>
          <div className="mb-5 flex flex-row items-center heading-about-section">
            <div>
              <img src={imgAboutSection} alt="" />
            </div>
            <h4>{headingAboutSection}</h4>
          </div>
          <p>{descriptionAboutSection}</p>
        </div>
        <a onClick={openModal}>View customer stories</a>
      </div>
    </div>
  );
};

export default AboutSection;
