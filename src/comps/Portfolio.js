import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PROJECTS, ICON_TYPES } from "../shared/CONSTS";
import Image from "next/image";
import { useState } from "react";
import SVGIconRender from "../utils/SVGIconRender";

export default function Portfolio() {
  // check if the project tile is hovered
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="portfolio-sec"
      className="flex w-full flex-col items-center justify-center pb-28"
    >
      <div className="my-8 break-words font-serif text-4xl font-semibold">
        <h2>Portfolio</h2>
      </div>
      <div
        id="projects"
        className="flex flex-wrap gap-12 border-t border-solid border-zinc-700 pt-12"
      >
        {PROJECTS.map((item) => (
          <a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href={item.href}
            target="_blank"
            rel="noopener"
            key={item.name}
            className="flex flex-shrink flex-grow basis-[19rem] flex-col border-b border-solid border-zinc-700 text-zinc-400 hover:border-zinc-200 hover:text-zinc-200"
          >
            <div className="flex flex-wrap items-center justify-between font-sans text-base font-thin uppercase">
              <p>{item.date}</p>
              <p className="flex">
                {item.icons.map((icon) =>
                  icon.type == ICON_TYPES.fortawesome ? (
                    <FontAwesomeIcon
                      icon={icon.icon}
                      key={icon.name}
                    ></FontAwesomeIcon>
                  ) : (
                    <SVGIconRender
                      icon={icon.icon}
                      key={icon.name}
                      fill={isHovered ? "#E4E4E7" : "#A1A1AA"} //zinc-200 and zinc-400
                      height="16" // text-base
                    ></SVGIconRender>
                  )
                )}
              </p>
            </div>
            <Image
              className="h-full w-full object-cover"
              src={item.image}
              alt={item.alt}
              loading="lazy"
            />
            <h3 className="py-5 font-sans text-2xl font-medium">{item.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
