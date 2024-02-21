import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

library.add(fas, faTwitter, faFontAwesome);

import "../../styles/FooterLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterLinks = ({ footerLinksTitle, children }) => {
  const [isLinkOpen, setIsLinkOpen] = useState(false);

  return (
    <div className="mb-4 md:mb-0 flex flex-col footer-links">
      <div
        className="mb-0 sm:mb-5 sm:ms-2 lg:ms-0 flex flex-row items-center"
        onClick={() => {
          setIsLinkOpen((prevState) => !prevState);
        }}
      >
        <h5 className="text-lg sm:text-2xl">{footerLinksTitle}</h5>
        <FontAwesomeIcon
          icon="fa-solid fa-chevron-down"
          className={`ms-3 lg:hidden transition-transform duration-500 transform ${
            isLinkOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <ul
        className={`flex flex-col text-sm tracking-widest overflow-hidden transition-all duration-500 ease-in-out ${
          isLinkOpen ? "h-auto" : "h-0"
        } lg:h-auto`}
      >
        {children}
      </ul>
    </div>
  );
};

export default FooterLinks;
