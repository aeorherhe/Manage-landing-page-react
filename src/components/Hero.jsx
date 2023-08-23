import { Button } from "./subs/Button";

const Hero = () => {
  return (
    <section className="hero-center">
      <div className="hero-img">
        <img src="/images/illustration-intro.svg" alt="illustration img" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Bring everyone together to build better products.
        </h1>
        <p className="hero-text">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button btnText="Get Started" btnClass="btn btn-primary" />
      </div>
    </section>
  );
};
export default Hero;
