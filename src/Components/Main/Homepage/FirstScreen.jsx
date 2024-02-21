import "../../../styles/FirstScreen.css";

const FirstScreen = ({ heading, heading2, description }) => {
  return (
    <div className="max-w-7xl w-full mt-12 mb-28 sm:my-36 lg:mt-28 lg:mb-36 mx-auto py-0 px-5 first-screen">
      <h1 className="my-3 mx-auto max-w-xl text-center text-3xl">{heading}</h1>
      <h2 className="mb-12 text-[#7e5fff] text-center text-3xl">{heading2}</h2>
      <p className="my-3 mx-auto text-center text-base">{description}</p>
    </div>
  );
};

export default FirstScreen;
