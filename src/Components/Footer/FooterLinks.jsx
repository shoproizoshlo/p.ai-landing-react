import "../../styles/FooterLinks.css";

const FooterLinks = ({ footerLinksTitle, children }) => {
  return (
    <div className="mb-4 md:mb-0 flex flex-col footer-links">
      <h5>{footerLinksTitle}</h5>
      <ul className="flex flex-col">{children}</ul>
    </div>
  );
};

export default FooterLinks;
