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
import Image from "next/image";

// custom comps
import Header from "../comps/Header";
import Footer from "../comps/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CONTACTS, PROJECTS } from "../shared/CONSTS";

export default function Home() {
  return (
    <div
      id="container"
      className={`${robotoFlex.variable} ${robotoSerif.variable} ${robotoMono.variable} relative grid grid-cols-_1fr60rem1fr bg-black text-center font-sans text-lg text-zinc-500`}
    >
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Here you can find all the works of Oleksandr Bereziuk aka @ZB333ZB since the beginning of his coding journey"
        />
        <title>@ZB333ZB|Oleksandr Bereziuk</title>
      </Head>
      <Header />
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
          <div className="col-span-1 col-start-2 flex flex-col items-center justify-center gap-4 rounded-md rounded-tr bg-zinc-900 px-2 py-3">
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
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                    key={item.name}
                    className="flex flex-shrink flex-grow basis-[19rem] flex-col border-b border-solid border-zinc-700 text-zinc-400 hover:border-zinc-200 hover:text-zinc-200"
                  >
                    <div className="flex flex-wrap items-center justify-between font-sans text-base font-thin uppercase">
                      <p>{item.date}</p>
                    </div>
                    <Image
                      className="max-h-[30rem] w-full object-contain"
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                    />
                    <h3 className="py-5 font-sans text-2xl font-medium">
                      {item.name}
                    </h3>
                  </a>
                ))}
              </div>
            </section>
            <section id="about-sec">
              <div className="my-8 break-words font-serif text-4xl font-semibold">
                About me
              </div>
              <article className="flex flex-wrap gap-12 py-5 text-justify indent-4">
                <p className="flex-1 basis-[19rem]">
                  I am a simple full-time worker. I am open to new knowledge.
                  Coding is my new hobby. I am an absolute beginner. The main
                  thing is that it gives me pleasure and opportunity to develop.
                </p>
                <p className=" flex-1 basis-[19rem]">
                  I still have no certainty in which area I want to develop
                  most. I started my journey on October 10, 2022. It was the
                  Responsive Web Design course by{" "}
                  <a
                    href="https://www.freecodecamp.org/"
                    target="_blank"
                    className="text-zinc-400 hover:text-zinc-200"
                  >
                    freeCodeCamp
                  </a>
                  . I have already received the certificate. I plan to continue
                  the courses further.
                </p>
              </article>
            </section>
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
                    <h3 className="py-5 font-sans text-2xl font-medium">
                      {item.name}
                    </h3>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
