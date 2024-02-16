import FooterLinks from "./FooterLinks";
import Logo from "../../assets/Logo.svg";

import "../../styles/Footer.css";

const Footer = ({ openModal, closeModal }) => {
  return (
    <footer>
      <div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div>
          <FooterLinks
            footerLinksTitle="Product"
            openModal={openModal}
            closeModal={closeModal}
          >
            <li>
              <a onClick={openModal}>Overview</a>
            </li>
            <li>
              <a onClick={openModal}>Customers</a>
            </li>
          </FooterLinks>
          <FooterLinks
            footerLinksTitle="Company"
            openModal={openModal}
            closeModal={closeModal}
          >
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
          <FooterLinks
            footerLinksTitle="Social"
            openModal={openModal}
            closeModal={closeModal}
          >
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
      <div className="policy">
        <p>Programmai Ltd. © 2022. All Rights Reserved.</p>
        <div>
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
