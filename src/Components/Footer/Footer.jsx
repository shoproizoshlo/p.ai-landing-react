import FooterLinks from "./FooterLinks";
import Logo from "../../assets/Logo.svg";

import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div>
          <FooterLinks footerLinksTitle="Product">
            <li>
              <a href="/">Overview</a>
            </li>
            <li>
              <a href="/">Customers</a>
            </li>
          </FooterLinks>
          <FooterLinks footerLinksTitle="Company">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </FooterLinks>
          <FooterLinks footerLinksTitle="Social">
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">LinkedIn</a>
            </li>
          </FooterLinks>
        </div>
      </div>
      <div className="policy">
        <p>Programmai Ltd. © 2022. All Rights Reserved.</p>
        <div>
          <p>
            <a href="/">Privacy Policy</a>
          </p>
          <p>
            <a href="/">Data Processing Agreement</a>
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
