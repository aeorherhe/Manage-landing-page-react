import { Button } from "./subs/Button";
import { pagesLinksData, socialLinksData } from "../assets/data";
import { Links } from "./subs/Links";
import "../../public/images/footer-logo.svg";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer">
        <From />
        <FooterLinks />
        <div className="footer-logos">
          <SocialLinks />
          <FooterLogo />
        </div>
      </div>
    </section>
  );
};
export default Footer;

// form
const From = () => {
  return (
    <div className="form-group">
      <form className="form-center">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Updates in your inbox…"
        />
        <Button btnText="Go" btnClass="btn btn-form" />
      </form>
      <div className="copyright copyright-desktop">
        <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
    </div>
  );
};

//footer links
const FooterLinks = () => {
  return (
    <div className="footer-links">
      <ul className="footer-lists">
        {pagesLinksData.map((items) => {
          return (
            <li key={items.id}>
              <Links text={items.page} address={items.link} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// social links
const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinksData.map((items) => {
        return <Links key={items.id} text={items.icon} address={items.link} />;
      })}
    </div>
  );
};

// footer logo
const FooterLogo = () => {
  return (
    <>
      <div className="footer-logo">
        <a href="#" className="footer-logo">
          <img src="/images/footer-logo.svg" alt="nav logo" />
        </a>
      </div>
      <div className="copyright copyright-mobile">
        <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
    </>
  );
};
