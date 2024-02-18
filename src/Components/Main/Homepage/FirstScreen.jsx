import "../../../styles/FirstScreen.css";

const FirstScreen = ({ heading, heading2, description }) => {
  return (
    <div className="max-w-7xl w-full mt-12 mb-28 sm:my-36 lg:mt-28 lg:mb-36 mx-auto py-0 px-5 first-screen">
      <h1>{heading}</h1>
      <h2>{heading2}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FirstScreen;
