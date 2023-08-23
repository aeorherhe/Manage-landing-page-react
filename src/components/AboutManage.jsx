/* eslint-disable react/prop-types */
// import { aboutUsDataLocal } from "../assets/data";
import { Button } from "./subs/Button";

// import { FetchData } from "./FetchData";

const AboutManage = ({ data }) => {
  return (
    <section className="about-section">
      <div className="about-header">
        <h1>What’s different about Manage?</h1>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      {/* for local data instead of CMS */}
      {/* <div className="about-content">
        {aboutUsDataLocal.map((items) => {
          return <AboutItems key={items.id} {...items} />;
        })}
      </div> */}

      {/* for CMS data */}
      <div className="about-content">
        {data.map((items) => {
          return <AboutItems key={items.id} {...items} />;
        })}
      </div>
    </section>
  );
};
export default AboutManage;

function AboutItems({ id, title, text }) {
  const number = id.toString().padStart(2, "0");
  return (
    <div className="about-item">
      <div className="about-item-header">
        {/* <h2>{number}</h2> */}
        <Button btnText={number} btnClass="btn btn-primary" />
        <h3>{title}</h3>
      </div>
      <div className="about-item-text">
        <p>{text}</p>
      </div>
    </div>
  );
}
