import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CONTACTS } from "../shared/CONSTS";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="col-span-1 col-start-2 flex flex-col items-center justify-between px-2 pt-10 pb-16 font-sans text-base font-thin md:flex-row"
    >
      <div id="copyright" className="order-2 p-4 md:order-none">
        <p>Oleksandr Bereziuk @ZB333ZB © 2022</p>
      </div>
      <div
        id="socials-footer"
        className="order-1 flex w-full items-center justify-evenly gap-0 p-4 md:order-none md:w-4/12 md:gap-7"
      >
        {CONTACTS.map((item) => (
          <a
            href={item.href}
            target="_blank"
            rel="noopener"
            key={item.name}
            className="text-zinc-400 hover:text-zinc-200"
          >
            <FontAwesomeIcon icon={item.icon} />
          </a>
        ))}
      </div>
    </footer>
  );
}
