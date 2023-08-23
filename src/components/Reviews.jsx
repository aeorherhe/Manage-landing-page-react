/* eslint-disable react/prop-types */
import { reviewsData } from "../assets/data";
import { Button } from "./subs/Button";
import { useState } from "react";

const Reviews = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="reviews-section">
      <h1 className="reviews-header">{`What they've said`}</h1>
      <div className="reviews-content">
        {reviewsData.map((items, index) => {
          return (
            <ReviewsItems
              key={items.id}
              {...items}
              index={index}
              activeSlide={activeSlide}
            />
          );
        })}
      </div>
      <div className="reviews-dots">
        {reviewsData.map((_, index) => {
          return (
            <div
              key={index}
              className={activeSlide === index ? "dots active" : "dots"}
              // className={`dots ${activeSlide === index ? "dots active" : ""}`}
              onClick={() => setActiveSlide(index)}
            ></div>
          );
        })}
      </div>
      <Button btnText="Get Started" btnClass="btn" />
    </section>
  );
};
export default Reviews;

function ReviewsItems({ img, name, job, text, index, activeSlide }) {
  return (
    <div
      className="reviews-item"
      style={{ transform: `translateX(${100 * (index - activeSlide)}%)` }}
    >
      <div className="reviews-item-img">
        <img src={img} alt={name} />
      </div>
      <div className="reviews-item-text">
        <p>{text}</p>
        <h3>{name}</h3>
        <p>{job}</p>
      </div>
    </div>
  );
}
