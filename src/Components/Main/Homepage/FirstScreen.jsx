import "../../../styles/FirstScreen.css";

const FirstScreen = ({ heading, heading2, description }) => {
  return (
    <div className="first-screen">
      <h1>{heading}</h1>
      <h2>{heading2}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FirstScreen;
