//next google fonts
import {
  Roboto_Flex,
  Roboto_Serif,
  Roboto_Mono,
  Righteous,
} from "@next/font/google";

const robotoFlex = Roboto_Flex({
  variable: "--ff-roboto-flex",
});
const robotoSerif = Roboto_Serif({
  variable: "--ff-roboto-serif",
});
const robotoMono = Roboto_Mono({
  variable: "--ff-roboto-mono",
});
const righteous = Righteous({
  weight: "400",
  variable: "--ff-righteous",
});

// next comps
import Head from "next/head";

// custom comps
import Header from "../comps/Header";
import Footer from "../comps/Footer";
import About from "../comps/About";
import Contact from "../comps/Contact";
import Portfolio from "../comps/Portfolio";

import { PAGES } from "../shared/CONSTS";

export default function Home() {
  return (
    <div
      id="container"
      className={`${robotoFlex.variable} ${robotoSerif.variable} ${robotoMono.variable}relative grid grid-cols-_1fr60rem1fr bg-black text-center font-sans text-lg text-zinc-500`}
    >
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={PAGES.home.description} />
        <title>{PAGES.home.title}</title>
      </Head>
      <Header isHeroOnPage={true} isHomePage={true} />
      <main id="main" className="col-span-full grid grid-cols-_1fr60rem1fr">
        <section
          id="hero-sec"
          className="col-span-full flex flex-col items-center justify-center px-5 pt-14 pb-32"
        >
          <div className="my-20 flex w-full flex-col items-center justify-center">
            <h1
              id="hero"
              className="bg-gradient-to-b from-white via-cyan-300 to-black bg-clip-text py-3 font-display text-5xl uppercase text-transparent md:text-6xl lg:text-7xl xl:text-8xl"
            >
              @ZB333ZB
            </h1>
            <h2
              id="hero-subtitle"
              className="py-3 font-mono text-xl lowercase tracking-wide md:text-2xl md:tracking-wider lg:text-3xl lg:tracking-widest xl:text-4xl"
            >
              A self-taught developer
            </h2>
          </div>
        </section>
        <div
          id="content"
          className="col-span-full grid grid-cols-_1fr60rem1fr bg-black pb-40 md:bg-zinc-900"
        >
          <div className="col-span-1 col-start-2 flex flex-col items-center justify-center gap-4 rounded-md bg-zinc-900 px-2 py-3">
            <Portfolio />
            <About />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
