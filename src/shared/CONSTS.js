//images
import landingPagePreview from "/public/images/landing_page_preview.png";
import surveyFormPreview from "/public/images/survey_form_preview.png";
import technicalDocumentationPreview from "/public/images/technical_documentation_preview.png";
import tributePagePreview from "/public/images/tribute_page_preview.png";
import tallyCounterPreview from "/public/images/tally_counter_preview.png";

//icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTelegram,
  faTwitter,
  faCodepen,
  faHtml5,
  faCss3,
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

export const ICON_TYPES = {
  fortawesome: "fortawesome",
  svg: "svg",
};

export const SVG_ICONS_NAMES = {
  nextJS: "nextJS",
  tailwindCSS: "tailwindCSS",
};

export const PROJECTS = [
  {
    href: "/projects/counter",
    image: tallyCounterPreview,
    alt: "Tally Counter Project",
    name: "Tally Counter",
    date: "7 JAN 2023",
    icons: [
      {
        name: "Next.js",
        type: ICON_TYPES.svg,
        icon: SVG_ICONS_NAMES.nextJS,
      },
      {
        name: "Tailwind CSS",
        type: ICON_TYPES.svg,
        icon: SVG_ICONS_NAMES.tailwindCSS,
      },
    ],
  },
  {
    href: "https://codepen.io/ZB333ZB/pen/VwdeGvr",
    image: surveyFormPreview,
    alt: "Survey Form Project",
    name: "Survey Form",
    date: "1 NOV 2022",
    icons: [
      {
        name: "HTML5",
        type: ICON_TYPES.fortawesome,
        icon: faHtml5,
      },
      {
        name: "CSS3",
        type: ICON_TYPES.fortawesome,
        icon: faCss3,
      },
    ],
  },
  {
    href: "https://codepen.io/ZB333ZB/pen/xxzZaqd",
    image: tributePagePreview,
    alt: "Tribute Page Project",
    name: "Tribute Page",
    date: "1 NOV 2022",
    icons: [
      {
        name: "HTML5",
        type: ICON_TYPES.fortawesome,
        icon: faHtml5,
      },
      {
        name: "CSS3",
        type: ICON_TYPES.fortawesome,
        icon: faCss3,
      },
    ],
  },
  {
    href: "https://codepen.io/ZB333ZB/pen/XWYXOWe",
    image: technicalDocumentationPreview,
    alt: "Technical Documentation Project",
    name: "Technical Documentation",
    date: "1 NOV 2022",
    icons: [
      {
        name: "HTML5",
        type: ICON_TYPES.fortawesome,
        icon: faHtml5,
      },
      {
        name: "CSS3",
        type: ICON_TYPES.fortawesome,
        icon: faCss3,
      },
    ],
  },
  {
    href: "https://codepen.io/ZB333ZB/pen/QWxyYbE",
    image: landingPagePreview,
    alt: "Landing Page Project",
    name: "Landing Page",
    date: "1 NOV 2022",
    icons: [
      {
        name: "HTML5",
        type: ICON_TYPES.fortawesome,
        icon: faHtml5,
      },
      {
        name: "CSS3",
        type: ICON_TYPES.fortawesome,
        icon: faCss3,
      },
    ],
  },
];

export const MENU_ITEMS = [
  {
    name: "Home",
    //if isHomePage is true, it scrolls up to the top of the page
    href: "/",
  },
  {
    name: "Portfolio",
    hrefOnHome: "/#portfolio-sec",
    href: "/portfolio",
  },
  {
    name: "About me",
    hrefOnHome: "/#about-sec",
    href: "/about",
  },
  {
    name: "Contact",
    hrefOnHome: "/#contact-sec",
    href: "/contact",
  },
];

export const PAGES = {
  home: {
    name: "Home",
    href: "/",
    title: "@ZB333ZB - Oleksandr Bereziuk",
    description:
      "Here you can find all the works of Oleksandr Bereziuk aka @ZB333ZB since the beginning of his coding journey",
  },
  counter: {
    name: "Counter",
    href: "/projects/counter",
    title: "Tally Counter - @ZB333ZB",
    description: "Tally Counter Project by Oleksandr Bereziuk",
  },
  about: {
    name: "About",
    href: "/about",
    title: "About me - @ZB333ZB",
    description: "About Oleksandr Bereziuk",
  },
  contact: {
    name: "Contact",
    href: "/contact",
    title: "Contact me - @ZB333ZB",
    description: "Contact Oleksandr Bereziuk",
  },
  portfolio: {
    name: "Portfolio",
    href: "/portfolio",
    title: "Portfolio - @ZB333ZB",
    description: "Portfolio of Oleksandr Bereziuk",
  },
};
