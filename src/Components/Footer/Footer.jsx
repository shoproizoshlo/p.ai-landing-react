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
            <li>Overview</li>
            <li>Customers</li>
          </FooterLinks>
          <FooterLinks footerLinksTitle="Company">
            <li>About Us</li>
            <li>Support</li>
            <li>Contact</li>
          </FooterLinks>
          <FooterLinks footerLinksTitle="Social">
            <li>Blog</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </FooterLinks>
        </div>
      </div>
      <div className="policy">
        <p>Programmai Ltd. © 2022. All Rights Reserved.</p>
        <div>
          <p>Privacy Policy</p>
          <p>Data Processing Agreement</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
