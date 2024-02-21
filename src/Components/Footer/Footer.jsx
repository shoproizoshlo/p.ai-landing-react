import FooterLinks from "./FooterLinks";
import Logo from "../../assets/Logo.svg";

import "../../styles/Footer.css";

const Footer = ({ openModal }) => {
  return (
    <footer className="max-w-7xl w-full my-0 mx-auto py-10 md:py-20 px-5">
      <div className="mb-12 sm:mb-20 flex flex-col sm:flex-row items-start justify-start sm:justify-between">
        <div className="overflow-hidden relative">
          <img
            src={Logo}
            alt=""
            className="w-full h-10 object-contain object-left relative inset-0"
          />
        </div>
        <div>
          <FooterLinks footerLinksTitle="Product" openModal={openModal}>
            <li>
              <a onClick={openModal}>Overview</a>
            </li>
            <li>
              <a onClick={openModal}>Customers</a>
            </li>
          </FooterLinks>
          <FooterLinks footerLinksTitle="Company" openModal={openModal}>
            <li>
              <a onClick={openModal}>About Us</a>
            </li>
            <li>
              <a onClick={openModal}>Support</a>
            </li>
            <li>
              <a onClick={openModal}>Contact</a>
            </li>
          </FooterLinks>
          <FooterLinks footerLinksTitle="Social" openModal={openModal}>
            <li>
              <a onClick={openModal}>Blog</a>
            </li>
            <li>
              <a onClick={openModal}>Twitter</a>
            </li>
            <li>
              <a onClick={openModal}>LinkedIn</a>
            </li>
          </FooterLinks>
        </div>
      </div>
      <div className="mb-0 flex flex-col md:flex-row policy">
        <p>Programmai Ltd. © 2022. All Rights Reserved.</p>
        <div className="mt-3 flex-grow flex flex-col md:flex-row md:justify-end">
          <p>
            <a onClick={openModal}>Privacy Policy</a>
          </p>
          <p>
            <a onClick={openModal}>Data Processing Agreement</a>
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
