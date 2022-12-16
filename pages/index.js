import Head from 'next/head';
import Image from 'next/image';

// images
import landingPagePreview from '../public/images/landing_page_preview.png'
import surveyFormPreview from '../public/images/survey_form_preview.png'
import technicalDocumentationPreview from '../public/images/technical_documentation_preview.png'
import tributePagePreview from '../public/images/tribute_page_preview.png'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faTelegram, faTwitter, faCodepen } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description"
          content="Here you can find all the works of Oleksandr Bereziuk aka @ZB333ZB since the beginning of his coding journey" />
        <title>@ZB333ZB|Oleksandr Bereziuk</title>
      </Head>
      <div id="header-wrapper">
        <header id="header">
          <input type="checkbox" id="menu-btn" name="menu-btn" />
          <label id="menu-btn-label" htmlFor="menu-btn">
            <div id="menu-btn_burger" className="hover-effect"></div>
          </label>
          <nav id="menu" role="menu">
            <ul id="menu-items">
              <li>
                <a className="menu-item hvr-underline-from-left" href="#" role="menuitem">Home</a>
              </li>
              <li>
                <a className="menu-item hvr-underline-from-left" href="#portfolio-sec" role="menuitem">Portfolio</a>
              </li>
              <li>
                <a className="menu-item hvr-underline-from-left" href="#about-sec" role="menuitem">About me</a>
              </li>
              <li>
                <a className="menu-item hvr-underline-from-left" href="#contact-sec" role="menuitem">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <main id="main">
        <div id="hero-wrapper">
          <section id="hero-sec">
            <h1 id="hero">@ZB333ZB</h1>
            <h2 id="hero-subtitle">
              Self-taught developer
            </h2>
          </section>
        </div>
        <div id="content-wrapper">
          <div id="content-column">
            <section id="portfolio-sec">
              <div className="heading">
                <h2>Portfolio</h2>
              </div>
              <div id="projects">
                <a className="project" href="https://codepen.io/ZB333ZB/pen/VwdeGvr" target="_blank" rel="noopener">
                  <div className="misc">
                    <p className="publish-date">1 NOV 2022</p>
                  </div>
                  <Image className="project-image" src={surveyFormPreview}
                    alt="Survey Form Project" loading="lazy" />
                  <h3 className="subheading">Survey Form</h3>
                </a>
                <a href="https://codepen.io/ZB333ZB/pen/xxzZaqd" className="project" target="_blank" rel="noopener">
                  <div className="misc">
                    <p>1 NOV 2022</p>
                  </div>
                  <Image className="project-image" src={tributePagePreview}
                    alt="Tribute Page Project" loading="lazy" />
                  <h3 className="subheading">Tribute Page</h3>
                </a>
                <a className="project" href="https://codepen.io/ZB333ZB/pen/XWYXOWe" target="_blank" rel="noopener">
                  <div className="misc">
                    <p>1 NOV 2022</p>
                  </div>
                  <Image src={technicalDocumentationPreview}
                    alt="Technical Documentation Project" className="project-image" loading="lazy" />
                  <h3 className="subheading">Technical Documentation</h3>
                </a>
                <a className="project" href="https://codepen.io/ZB333ZB/pen/QWxyYbE" target="_blank" rel="noopener">
                  <div className="misc">
                    <p>1 NOV 2022</p>
                  </div>
                  <Image src={landingPagePreview} alt="Landing Page Project"
                    className="project-image" loading="lazy" />
                  <h3 className="subheading">Landing Page</h3>
                </a>
              </div>
            </section>
            <section id="about-sec">
              <div className="heading">About me</div>
              <article>
                <p>I am a simple full-time worker. I am open to new knowledge. Coding is my new hobby. I am an
                  absolute beginner. The main thing is that it gives me pleasure and opportunity to develop.
                </p>
                <p>I still have no certainty in which area I want to develop most. I started my journey on
                  October 10, 2022. It was the Responsive Web Design course by <a
                    href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a>. I have already
                  received the certificate. I plan to continue the courses further.</p>
              </article>
            </section>
            <section id="contact-sec">
              <div className="heading">How to reach me</div>
              <div id="socials">
                <a href="mailto: zb333zb@pm.me" className="social" target="_blank" rel="noopener">
                  {/* <i className="fa-regular fa-envelope"></i> */}
                  <FontAwesomeIcon icon={faEnvelope} />
                  <h3 className="subheading">Email</h3>
                </a>
                <a href="https://github.com/ZB333ZB" className="social" id="profile-link" target="_blank"
                  rel="noopener">
                  <FontAwesomeIcon icon={faGithub} />
                  <h3 className="subheading">Github</h3>
                </a>
                <a href="https://t.me/ZB333ZB" className="social" target="_blank" rel="noopener">
                  <FontAwesomeIcon icon={faTelegram} />
                  <h3 className="subheading">Telegram</h3>
                </a>
                <a href="https://twitter.com/ZB333ZB" className="social" target="_blank" rel="noopener">
                  <FontAwesomeIcon icon={faTwitter} />
                  <h3 className="subheading">Twitter</h3>
                </a>
                <a href="https://codepen.io/ZB333ZB" className="social" target="_blank" rel="noopener">
                  <FontAwesomeIcon icon={faCodepen} />
                  <h3 className="subheading">Codepen</h3>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer id="footer">
        <div id="copyright">
          <p>Oleksandr Bereziuk @ZB333ZB © 2022</p>
        </div>
        <div id="socials-footer">
          <div className="social-footer">
            <a href="mailto: zb333zb@pm.me" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <div className="social-footer">
            <a href="https://github.com/ZB333ZB" id="profile-link" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="social-footer">
            <a href="https://t.me/ZB333ZB" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
          <div className="social-footer">
            <a href="https://twitter.com/ZB333ZB" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="social-footer">
            <a href="https://codepen.io/ZB333ZB" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}