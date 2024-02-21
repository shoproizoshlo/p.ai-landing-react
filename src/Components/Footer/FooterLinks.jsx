import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

library.add(fas, faTwitter, faFontAwesome);

import "../../styles/FooterLinks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterLinks = ({ footerLinksTitle, children }) => {
  const [isLinkOpen, setIsLinkOpen] = useState(false);

  const toggleLinks = () => {
    console.log("hello");
    setIsLinkOpen(true);
  };

  return (
    <div className="mb-4 md:mb-0 flex flex-col footer-links">
      <div className="flex flex-row items-center" onClick={toggleLinks}>
        <h5 className="mb-0 sm:mb-7 text-lg sm:text-2xl">{footerLinksTitle}</h5>
        <FontAwesomeIcon
          icon="fa-solid fa-chevron-down"
          className={`ms-3 md:hidden ${isLinkOpen ? "open" : ""}`}
        />
      </div>
      <ul
        className={`flex flex-col text-sm tracking-widest ${
          isLinkOpen ? "flex" : "hidden"
        }`}
      >
        {children}
      </ul>
    </div>
  );
};

export default FooterLinks;
