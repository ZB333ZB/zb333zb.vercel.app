export default function About() {
  return (
    <section id="about-sec">
      <div className="my-8 break-words font-serif text-4xl font-semibold">
        About me
      </div>
      <article className="flex flex-wrap gap-12 py-5 text-justify indent-4">
        <p className="flex-1 basis-[19rem]">
          I am a simple full-time worker. I am open to new knowledge. Coding is
          my new hobby. I am an absolute beginner. The main thing is that it
          gives me pleasure and opportunity to develop.
        </p>
        <p className=" flex-1 basis-[19rem]">
          I still have no certainty in which area I want to develop most. I
          started my journey on October 10, 2022. It was the Responsive Web
          Design course by{" "}
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            className="text-zinc-400 hover:text-zinc-200"
          >
            freeCodeCamp
          </a>
          . I have already received the certificate. I plan to continue the
          courses further.
        </p>
      </article>
    </section>
  );
}
