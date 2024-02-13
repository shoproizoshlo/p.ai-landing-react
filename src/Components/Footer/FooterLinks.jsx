import "../../styles/FooterLinks.css";

const FooterLinks = ({ footerLinksTitle, children }) => {
  return (
    <div className="footer-links">
      <h5>{footerLinksTitle}</h5>
      <ul>{children}</ul>
    </div>
  );
};

export default FooterLinks;
