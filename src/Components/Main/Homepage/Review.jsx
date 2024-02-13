import "../../../styles/Review.css";

const Review = ({ companyName, reviewText, reviewerName, reviewerTitle }) => {
  return (
    <div className="review">
      <div>
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
  );
};

export default Review;
