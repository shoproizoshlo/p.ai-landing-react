import FirstScreen from "./FirstScreen";
import Marketers from "./Marketers";
import Product from "./Product";
import About from "./About";

import Predict from "../../../assets/predict.svg";
import Determine from "../../../assets/determine.svg";
import Activate from "../../../assets/activate.svg";
import ImgAbout from "../../../assets/about.svg";

const Homepage = ({ openModal }) => {
  return (
    <div className="homepage">
      <FirstScreen
        heading="Generate unlimited, winning audiences."
        heading2="No targeting gaps."
        description="Use machine learning with first-party data to generate an endless amount of audiences for your marketing & advertising channels. No effort or delay & complementary to Customer Data Platforms."
      />
      <Marketers openModal={openModal} />
      <div className="products">
        <Product
          heading3="Predict every customer’s future."
          productDescription="Accurately predict short and long-term customer outcomes and take action with forward-looking data."
          productImg={Predict}
          openModal={openModal}
        />
        <Product
          heading3="Determine how predictive audiences get built."
          productDescription="Use a combination of predictions to build your predictive audiences most suited to the task at hand; acquiring high-value customers or driving repeat customer conversions."
          productImg={Determine}
          openModal={openModal}
        />
        <Product
          heading3="Activate your predictive audiences anywhere."
          productDescription="Sync to any marketing channel for targeting, or run multi-cell holdout experiments to prove lift."
          productImg={Activate}
          openModal={openModal}
        />
      </div>
      <About
        headingAbout="Volume, uplift and efficiency. No trade-offs."
        imgAbout={ImgAbout}
        openModal={openModal}
      />
    </div>
  );
};

export default Homepage;
