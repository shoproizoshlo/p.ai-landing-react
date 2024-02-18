import "../../../styles/Review.css";

const Review = ({ companyName, reviewText, reviewerName, reviewerTitle }) => {
  return (
    <div className="w-full review-container">
      <div className="my-0 mx-auto max-w-7xl w-full flex flex-col items-center text-white review">
        <div className="my-28 mx-5 md:mt-12 md:mb-32 lg:m-52 flex flex-col">
          <div className="company-name">
            <img src={companyName} alt="company name" />
          </div>
          <p data-last-word={reviewText.split(" ").pop()}>
            {reviewText.replace(/\s+\S*$/, "")}
          </p>

          <p>{reviewerName}</p>
          <p>{reviewerTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
