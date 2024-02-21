import "../../styles/FooterLinks.css";

const FooterLinks = ({ footerLinksTitle, children }) => {
  return (
    <div className="mb-4 md:mb-0 flex flex-col footer-links">
      <h5 className="mb-0 sm:mb-7 text-lg sm:text-2xl">{footerLinksTitle}</h5>
      <ul className="flex flex-col text-sm tracking-widest">{children}</ul>
    </div>
  );
};

export default FooterLinks;
