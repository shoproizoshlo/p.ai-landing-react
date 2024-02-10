import "../../../styles/Review.css";

const Review = ({ companyName, reviewText, reviewerName, reviewerTitle }) => {
  return (
    <div className="review">
      <div>
        <div className="company-name">
          <img src={companyName} alt="company name" />
        </div>
        <p>{reviewText}</p>
        <p>{reviewerName}</p>
        <p>{reviewerTitle}</p>
      </div>
    </div>
  );
};

export default Review;
