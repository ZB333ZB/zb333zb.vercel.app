//images
import landingPagePreview from "/public/images/landing_page_preview.png";
import surveyFormPreview from "/public/images/survey_form_preview.png";
import technicalDocumentationPreview from "/public/images/technical_documentation_preview.png";
import tributePagePreview from "/public/images/tribute_page_preview.png";

//icons
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faTelegram,
  faTwitter,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

export const CONTACTS = [
  {
    href: "mailto: zb333zb@pm.me",
    icon: faEnvelope,
    name: "Email",
  },
  {
    href: "https://github.com/ZB333ZB",
    icon: faGithub,
    name: "Github",
  },
  {
    href: "https://t.me/ZB333ZB",
    icon: faTelegram,
    name: "Telegram",
  },
  {
    href: "https://twitter.com/ZB333ZB",
    icon: faTwitter,
    name: "Twitter",
  },
  {
    href: "https://codepen.io/ZB333ZB",
    icon: faCodepen,
    name: "Codepen",
  },
];

export const PROJECTS = [
  {
    href: "https://codepen.io/ZB333ZB/pen/VwdeGvr",
    image: surveyFormPreview,
    alt: "Survey Form Project",
    name: "Survey Form",
    date: "1 NOV 2022",
  },
  {
    href: "https://codepen.io/ZB333ZB/pen/xxzZaqd",
    image: tributePagePreview,
    alt: "Tribute Page Project",
    name: "Tribute Page",
    date: "1 NOV 2022",
  },
  {
    href: "https://codepen.io/ZB333ZB/pen/XWYXOWe",
    image: technicalDocumentationPreview,
    alt: "Technical Documentation Project",
    name: "Technical Documentation",
    date: "1 NOV 2022",
  },
  {
    href: "https://codepen.io/ZB333ZB/pen/QWxyYbE",
    image: landingPagePreview,
    alt: "Landing Page Project",
    name: "Landing Page",
    date: "1 NOV 2022",
  },
];

export const MENU_ITEMS = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Portfolio",
    href: "#portfolio-sec",
  },
  {
    name: "About me",
    href: "#about-sec",
  },
  {
    name: "Contact",
    href: "#contact-sec",
  },
];
