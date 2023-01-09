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

import Head from "next/head";
import Footer from "../../../comps/Footer";
import Header from "../../../comps/Header";
import Counter from "../../../comps/Counter/Counter";
import { PAGES } from "../../../shared/CONSTS";

export default function CountePage() {
  return (
    <>
      <div
        id="container"
        className={`${robotoFlex.variable} ${robotoSerif.variable} ${robotoMono.variable} relative grid grid-cols-_1fr60rem1fr bg-black text-center font-sans text-lg text-zinc-500`}
      >
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={PAGES.counter.description} />
          <title>{PAGES.counter.title}</title>
        </Head>
        <Header isHeroOnPage={false} isHomePage={false} />
        <main id="main" className="col-span-full grid grid-cols-_1fr60rem1fr">
          <div
            id="content"
            className="col-span-full grid grid-cols-_1fr60rem1fr bg-black pb-40 md:bg-zinc-900"
          >
            <section
              id="counter-sec"
              className="col-span-1 col-start-2 flex flex-col items-center justify-center gap-4 rounded-md bg-gradient-to-b from-zinc-900 via-zinc-900 to-black px-2 py-3 md:to-zinc-900"
            >
              <Counter />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
