import "../../../styles/About.css";

const About = ({ headingAbout, imgAbout }) => {
  return (
    <div className="about">
      <h3>{headingAbout}</h3>
      <div>
        <img src={imgAbout} alt="" />
      </div>
      Components
      <p>We’d love to give you a demo.</p>
      <button>Book a demo</button>
    </div>
  );
};

export default About;
