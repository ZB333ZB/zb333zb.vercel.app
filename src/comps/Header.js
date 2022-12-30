import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Burger
import { Burger } from "./anims/Burger";
import { selectState as burgerState } from "./anims/burgerSlice";

import {
  selectState as headerHeroState,
  reveal,
  conceal,
} from "../redux/headerHeroSlice";

import { MENU_ITEMS } from "../shared/CONSTS";

export default function Header() {
  const isHeaderHeroRevealed = useSelector(headerHeroState);
  const isburgerEnabled = useSelector(burgerState);

  const dispatch = useDispatch();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const heroSec = document.getElementById("hero-sec");
    const heroSecBottom = heroSec.offsetTop + heroSec.offsetHeight / 2;

    scrollPosition > heroSecBottom ? dispatch(reveal()) : dispatch(conceal());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      id="header"
      className="top-0 left-0 col-span-full grid grid-cols-_1fr60rem1fr bg-black md:sticky"
    >
      <div className="relative col-span-1 col-start-2 flex items-center justify-between py-5 px-3 text-xl">
        <p
          id="header-hero"
          onScroll={handleScroll}
          className={`${
            isHeaderHeroRevealed
              ? "opacity-100 transition-all"
              : "opacity-0 transition-all"
          } bg-gradient-to-b from-white via-cyan-300 to-black bg-clip-text font-display text-2xl uppercase text-transparent`}
        >
          @ZB333ZB
        </p>
        <Burger />
        <nav
          id="menu"
          className={`${
            isburgerEnabled ? "right-0" : "-right-full"
          } fixed top-16 h-full w-1/2 bg-black py-12 font-sans font-light uppercase transition-all md:static md:right-auto md:top-auto md:h-auto md:w-auto md:overflow-scroll md:py-0 md:transition-none`}
        >
          <ul className="flex flex-col items-center justify-start gap-12 bg-gradient-to-b from-black via-zinc-900 to-black md:flex-row md:justify-evenly md:from-black">
            {MENU_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hvr-underline-from-left text-zinc-400 before:h-[1px] before:bg-current hover:text-zinc-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
