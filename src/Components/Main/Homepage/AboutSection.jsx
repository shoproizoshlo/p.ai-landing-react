import "../../../styles/AboutSection.css";

const AboutSection = ({
  imgAboutSection,
  headingAboutSection,
  descriptionAboutSection,
}) => {
  return (
    <div className="about-section">
      <div className="line"></div>
      <div className="content-about-section">
        <div>
          <div className="heading-about-section">
            <div>
              <img src={imgAboutSection} alt="" />
            </div>
            <h4>{headingAboutSection}</h4>
          </div>
          <p>{descriptionAboutSection}</p>
        </div>
        <a href="/">View customer stories</a>
      </div>
    </div>
  );
};

export default AboutSection;
