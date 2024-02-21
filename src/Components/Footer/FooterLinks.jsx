import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

library.add(fas, faTwitter, faFontAwesome);

import "../../styles/FooterLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterLinks = ({ footerLinksTitle, children }) => {
  return (
    <div className="mb-4 md:mb-0 flex flex-col footer-links">
      <div className="flex flex-row items-center">
        <h5 className="mb-0 sm:mb-7 text-lg sm:text-2xl">{footerLinksTitle}</h5>
        <FontAwesomeIcon
          icon="fa-solid fa-chevron-down"
          className="ms-3 md:hidden"
        />
      </div>
      <ul className="flex flex-col text-sm tracking-widest">{children}</ul>
    </div>
  );
};

export default FooterLinks;
