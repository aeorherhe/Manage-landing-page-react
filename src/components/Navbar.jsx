/* eslint-disable react/prop-types */
// imports
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { pagesLinksData } from "../assets/data";
import { Links } from "./subs/Links";
import { useGlobalContext } from "./GlobalCotext";
import { useRef } from "react";
import { Button } from "./subs/Button";

const Navbar = () => {
  const NavLinks = pagesLinksData.slice(1, 6);
  const { toggleNav, isNavOpen } = useGlobalContext();
  const navItemRef = useRef(null);
  const linksRef = useRef(null);

  return (
    <section className="navbar-section ">
      <div className={isNavOpen ? " overlay" : " "} onClick={toggleNav}></div>
      <nav
        className="navbar"
        style={{ background: isNavOpen ? "white" : "transparent" }}
      >
        <div className="nav-logo-ctn">
          <a href="#" className="nav-logo">
            <img src="/public/images/logo.svg" alt="nav logo" />
          </a>
          <div className="nav-toggle" onClick={toggleNav}>
            {isNavOpen ? (
              <GrClose className="nav-close" />
            ) : (
              <GiHamburgerMenu className="nav-open" />
            )}
          </div>
        </div>
        <div className="nav-menu-items-ctn">
          <div
            className="nav-menu-ctn"
            ref={navItemRef}
            style={{
              height: isNavOpen
                ? `${linksRef.current.getBoundingClientRect().height}px`
                : "0",
            }}
          >
            <div className="nav-menu" ref={linksRef}>
              {NavLinks.map((link) => {
                return <NavMenu key={link.id} {...link} />;
              })}
            </div>
          </div>
        </div>
        <Button btnText="Get Started" btnClass="btn btn-desktop" />
      </nav>
    </section>
  );
};
export default Navbar;

function NavMenu({ page, link }) {
  return (
    <div className="nav-item">
      <Links text={page} address={link} />
    </div>
  );
}
