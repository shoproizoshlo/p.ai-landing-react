import { Link } from "react-router-dom";

import FooterLinks from "./FooterLinks";
import Logo from "../../assets/Logo.svg";

import "../../styles/Footer.css";

const Footer = ({ openModal }) => {
  return (
    <footer className="max-w-7xl w-full h-96 lg:h-auto my-0 mx-auto py-10 md:py-20 px-5">
      <div className="mb-12 sm:mb-20 flex flex-col md:flex-row items-start justify-start sm:justify-between">
        <div className="mb-6 overflow-hidden relative">
          <img
            src={Logo}
            alt=""
            className="w-full h-10 object-contain object-left relative inset-0"
          />
        </div>
        <div>
          <FooterLinks footerLinksTitle="Product" openModal={openModal}>
            <li onClick={openModal}>
              <Link to="/product">Overview</Link>
            </li>
            <li onClick={openModal}>
              <Link to="/success-stories">Customers</Link>
            </li>
          </FooterLinks>
          <FooterLinks footerLinksTitle="Company" openModal={openModal}>
            <li onClick={openModal}>
              <Link to="/about-us">About Us</Link>
            </li>
            <li onClick={openModal}>
              <Link to="/support">Support</Link>
            </li>
            <li onClick={openModal}>
              <Link to="/contact">Contact</Link>
            </li>
          </FooterLinks>
          <FooterLinks footerLinksTitle="Social" openModal={openModal}>
            <li onClick={openModal}>
              <Link to="/blog">Blog</Link>
            </li>
            <li onClick={openModal}>Twitter</li>
            <li onClick={openModal}>LinkedIn</li>
          </FooterLinks>
        </div>
      </div>
      <div className="mb-0 flex flex-col md:flex-row policy">
        <p>Programmai Ltd. © 2022. All Rights Reserved.</p>
        <div className="mt-3 flex-grow flex flex-col md:flex-row md:justify-end">
          <p onClick={openModal}>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </p>

          <p onClick={openModal}>
            <Link to="/data-processing-agreement">
              Data Processing Agreement
            </Link>
          </p>
        </div>
      </div>
      <p>
        Coded by{" "}
        <a href="https://github.com/shoproizoshlo" target="blank">
          Sue Brechko
        </a>
        . Design{" "}
        <a href="https://t.me/figma2html/1695" target="blank">
          @figma2html
        </a>
      </p>
    </footer>
  );
};

export default Footer;
