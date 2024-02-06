import FirstScreen from "./FirstScreen";
import "../../../styles/Homepage.css";

const Homepage = () => {
    return (
      <div className="homepage">
        <FirstScreen
          heading="Generate unlimited, winning audiences."
          heading2="No targeting gaps."
          description="Use machine learning with first-party data to generate an endless amount of audiences for your marketing & advertising channels. No effort or delay & complementary to Customer Data Platforms."
        />
      </div>
    );
};

export default Homepage;
