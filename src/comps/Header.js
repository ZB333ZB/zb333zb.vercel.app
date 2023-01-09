import { Switch } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { MENU_ITEMS } from "../shared/CONSTS";

export default function Header(props) {
  const [isburgerEnabled, setIsburgerEnabled] = useState(false);
  const [isHeaderHeroRevealed, setIsHeaderHeroRevealed] = useState(false);
  const [isMenuItemHome, setIsMenuItemHome] = useState(false);

  //   prevent scroll when isburgerEnabled is true
  useEffect(() => {
    if (isburgerEnabled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isburgerEnabled]);

  useEffect(() => {
    if (isMenuItemHome) {
      window.scrollTo(0, 0);
      setIsMenuItemHome(false);
    }
  }, [isMenuItemHome]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const hero = document.getElementById("hero");

    hero != null && scrollPosition > hero.offsetTop + hero.offsetHeight / 2
      ? setIsHeaderHeroRevealed(true)
      : setIsHeaderHeroRevealed(false);
  };

  const HeaderHero = () => {
    if (props.isHeroOnPage)
      return (
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
      );
    return (
      <p
        id="header-hero"
        className="bg-gradient-to-b from-white via-cyan-300 to-black bg-clip-text font-display text-2xl uppercase text-transparent opacity-100 transition-all"
      >
        @ZB333ZB
      </p>
    );
  };

  const MenuItemsSwitch = () => {
    return MENU_ITEMS.map((item) => (
      <li key={item.name}>
        {item.name === "Home" && props.isHomePage ? (
          <button
            onClick={() => {
              setIsburgerEnabled(false);
              setIsMenuItemHome(true);
            }}
          >
            <a className="hvr-underline-from-left uppercase text-zinc-400 before:h-px before:bg-current hover:text-zinc-200">
              {item.name}
            </a>
          </button>
        ) : props.isHomePage ? (
          <button
            onClick={() => {
              setIsburgerEnabled(false);
            }}
          >
            <a
              href={item.hrefOnHome}
              className="hvr-underline-from-left uppercase text-zinc-400 before:h-px before:bg-current hover:text-zinc-200"
            >
              {item.name}
            </a>
          </button>
        ) : (
          <button
            onClick={() => {
              setIsburgerEnabled(false);
            }}
          >
            <a
              href={item.href}
              className="hvr-underline-from-left uppercase text-zinc-400 before:h-px before:bg-current hover:text-zinc-200"
            >
              {item.name}
            </a>
          </button>
        )}
      </li>
    ));
  };

  return (
    <header
      id="header"
      className="top-0 left-0 z-40 col-span-full grid grid-cols-_1fr60rem1fr bg-black md:sticky"
    >
      <div className="relative col-span-1 col-start-2 flex items-center justify-between py-5 px-3 text-xl">
        <HeaderHero />
        <Switch
          checked={isburgerEnabled}
          onChange={() => setIsburgerEnabled(!isburgerEnabled)}
          className="flex h-6 w-6 cursor-pointer flex-col items-center justify-around hover:text-zinc-200 md:hidden"
        >
          <span
            className={`${
              isburgerEnabled && "translate-x-1 translate-y-2 rotate-45"
            } h-0.5 w-6 bg-current transition-all ease-in-out`}
          ></span>
          <span
            className={`${
              isburgerEnabled ? "-translate-x-12 bg-transparent" : "bg-current"
            } h-0.5 w-6 transition-all ease-in-out`}
          ></span>
          <span
            className={`${
              isburgerEnabled && "translate-x-1 -translate-y-2 -rotate-45"
            } h-0.5 w-6 bg-current transition-all ease-in-out`}
          ></span>
        </Switch>
        <div
          className={`${
            isburgerEnabled ? "right-0 z-50" : "-right-full"
          } fixed top-16 h-full w-1/2 bg-black py-12 font-sans font-light transition-all md:static md:right-auto md:top-auto md:h-auto md:w-auto md:overflow-scroll md:py-0 md:transition-none`}
        >
          <ul className="flex flex-col items-center justify-start gap-12 bg-gradient-to-b from-black via-zinc-900 to-black md:flex-row md:justify-evenly md:from-black">
            <MenuItemsSwitch />
          </ul>
        </div>
      </div>
    </header>
  );
}
