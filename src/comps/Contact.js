import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CONTACTS } from "../shared/CONSTS";

export default function Contact() {
  return (
    <section
      id="contact-sec"
      className="flex w-full flex-col items-center justify-center"
    >
      <div className="my-8 break-words font-serif text-4xl font-semibold">
        How to reach me
      </div>
      <div
        id="socials"
        className="flex w-full flex-col flex-wrap items-center justify-evenly gap-5 md:flex-row"
      >
        {CONTACTS.map((item) => (
          <a
            href={item.href}
            key={item.name}
            className="flex basis-3.5 items-center gap-2 text-zinc-400 hover:text-zinc-200"
          >
            <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
            <h3 className="py-5 font-sans text-2xl font-medium">{item.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
