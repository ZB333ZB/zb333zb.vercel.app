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
import Footer from "../../comps/Footer";
import Header from "../../comps/Header";
import Contact from "../../comps/Contact";
import { PAGES } from "../../shared/CONSTS";

export default function ContactPage() {
  return (
    <div
      id="container"
      className={`${robotoFlex.variable} ${robotoSerif.variable} ${robotoMono.variable} relative grid grid-cols-_1fr60rem1fr bg-black text-center font-sans text-lg text-zinc-500`}
    >
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={PAGES.contact.description} />
        <title>{PAGES.contact.title}</title>
      </Head>
      <Header isHeroOnPage={false} isHomePage={false} />
      <main id="main" className="col-span-full grid grid-cols-_1fr60rem1fr">
        <div
          id="content"
          className="col-span-full grid grid-cols-_1fr60rem1fr bg-black md:bg-zinc-900"
        >
          <div className="col-span-1 col-start-2 flex flex-col items-center justify-center gap-4 rounded-md bg-zinc-900 px-2 py-3">
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
