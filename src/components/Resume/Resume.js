import "./Resume.css";
import logo from "../../images/CV-logo.png";

export default function Resume() {
  return (
    <main className="resumePage">
      <article className="resumeSheet">
        <header className="resumeHero">
          <div className="resumeHeroLeft">
            <img src={logo} alt="Carolina Vitale logo" className="resumeLogo" />

            <h1>
              Carolina
              <br />
              Vitale
            </h1>

            <p className="resumeTagline">
              Frontend Engineer building thoughtful digital products through React, UI Design and Product Thinking.
            </p>
          </div>

          <div className="resumeContact">
            <span>Tampa, FL</span>
            <a href="mailto:cvitalerrico@gmail.com">cvitalerrico@gmail.com</a>
            <a href="tel:+18134853547">+1 (813) 485-3547</a>
            <a href="https://carolavitale.com" target="_blank" rel="noreferrer">
              carolavitale.com
            </a>
          </div>
        </header>

        <section className="resumeIntro">
          <div>
            <h2>About</h2>
          </div>

          <div>
            <p>
              I enjoy building products that are simple, intuitive, and easy to
              maintain. My work combines frontend engineering, interface design,
              and product thinking to create experiences that feel natural for
              users and scalable for teams.
            </p>
          </div>
        </section>

        <section className="resumeSection">
          <h2>Experience</h2>

          <div className="resumeExperience">
            <article className="resumeJob">
              <div className="resumeJobMeta">
                <span>SOURAW</span>
                <small>Mar 2024 — Present</small>
              </div>

              <div className="resumeJobContent">
                <h3>Founder & Frontend Engineer</h3>
                <p className="resumeJobIntro">
                  Built and continue to lead the digital product behind SOURAW,
                  combining branding, product design, frontend engineering, and
                  continuous improvements based on customer feedback.
                </p>
                <ul>
                  <li>Shaped the product structure, user flows, navigation, and customer experience.</li>
                  <li>Built the frontend using React, reusable components, and responsive layouts.</li>
                  <li>Automated customer workflows through Firebase Firestore and EmailJS.</li>
                  <li>Refined the user experience across desktop and mobile.</li>
                </ul>
              </div>
            </article>

            <article className="resumeJob">
              <div className="resumeJobMeta">
                <span>Freelance & Personal Projects</span>
                <small>Mar 2023 — Mar 2024</small>
              </div>

              <div className="resumeJobContent">
                <h3>Frontend & UI Developer</h3>
                <ul>
                  <li>Designed and built responsive websites focused on usability, accessibility, and visual clarity.</li>
                  <li>Created wireframes and responsive layouts before implementation.</li>
                  <li>Built reusable React components to improve interface consistency.</li>
                  <li>Improved navigation, information hierarchy, and cross-device usability.</li>
                </ul>
              </div>
            </article>

            <article className="resumeJob">
              <div className="resumeJobMeta">
                <span>Santander Global T&O</span>
                <small>Apr 2022 — Oct 2022</small>
              </div>

              <div className="resumeJobContent">
                <h3>Front-End Developer</h3>
                <ul>
                  <li>Built frontend features for an internal operational web application.</li>
                  <li>Collaborated within Agile sprint cycles using Git-based workflows.</li>
                  <li>Improved internal interfaces to simplify workflows and access to information.</li>
                </ul>
              </div>
            </article>

            <article className="resumeJob">
              <div className="resumeJobMeta">
                <span>Global Exchange Group</span>
                <small>Feb 2020 — Mar 2022</small>
              </div>

              <div className="resumeJobContent">
                <h3>Corporate Sales Executive</h3>
                <ul>
                  <li>Managed customer relationships and product presentations in financial services.</li>
                  <li>Delivered onboarding and training sessions for agents and business partners.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="resumeSection">
          <h2>Selected Work</h2>

          <div className="resumeWork">
            <a href="https://souraw.com" target="_blank" rel="noreferrer">
              <h3>SOURAW</h3>
              <p>React · Firebase · Firestore · Product Design · Responsive UI</p>
              <small>souraw.com →</small>
            </a>

            <a href="https://carolavitale.com" target="_blank" rel="noreferrer">
              <h3>Portfolio</h3>
              <p>Frontend · UI Design · Product Work</p>
              <small>carolavitale.com →</small>
            </a>

            <a href="https://bymiguelbravo.com" target="_blank" rel="noreferrer">
              <h3>By Miguel Bravo</h3>
              <p>Website Design · Frontend · Content Architecture</p>
              <small>bymiguelbravo.com →</small>
            </a>
          </div>
        </section>

        <section className="resumeSection resumeDetails">
          <div>
            <h2>Skills</h2>
            <div className="resumeSkills">
              <p>React · JavaScript · HTML · CSS · React Router</p>
              <p>UI Design · Wireframing · Accessibility · Figma</p>
              <p>Firebase · REST APIs · EmailJS · Node · Express</p>
              <p>Git · GitHub · Agile · Debugging · Deployment</p>
            </div>
          </div>

          <div>
            <h2>Education</h2>
            <div className="resumeEducation">
              <p><strong>Ironhack</strong> Web Development</p>
              <p><strong>EAE</strong> Marketing</p>
              <p><strong>Condé Nast</strong> Luxury Marketing</p>
              <p><strong>CIDIG</strong> Fashion Design</p>
            </div>
          </div>

          <div>
            <h2>Languages</h2>
            <p className="resumeLanguages">Spanish · English · Italian</p>
          </div>
        </section>
      </article>
    </main>
  );
}