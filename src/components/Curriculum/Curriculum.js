import React from 'react';
import '../Curriculum/Curriculum.css'

function Curriculum() {

  return (
    <>
      <div className='curriculum'>

        <div className='cv-tittle'>
          <h1>CAROLINA VITALE</h1>
          <h2>Front-End Web Developer</h2>
        </div>

        <div>
          <h3>ABOUT ME</h3>
          <p className='cv-profile'>
          Front-End Developer specialized in building responsive, user-centered interfaces using React and modern JavaScript. Strong focus on clean, scalable component-based architectures, accessibility, and performance. With a background in fashion design, I bring a strong visual and UX sensibility, collaborating closely with design and product teams to translate requirements into high-quality front-end solutions.  </p>
        </div>

        <div className='display-flex'>
          <h3>PROFESSIONAL EXPERIENCE</h3>

          <div className='cv-pe'>
            <h4>Front-End Web Developer</h4>
            <h5>Personal & Freelance Projects</h5>
            <h5>Mar 2023 - present</h5>
            <ul className='experience-list'>
              <li>Designed and developed responsive, user-focused web interfaces using React and modern CSS.</li>
              <li>Built component-based architectures and reusable UI patterns following separation of concerns and modular design principles.</li>
              <li>Integrated front-end applications with REST APIs, handling asynchronous data and state management.</li>
              <li>Focused on performance optimization, accessibility (a11y), and semantic HTML to ensure clean, maintainable code.</li>
              <li>Developed and integrated a review system with persistent data storage using Firebase Firestore.</li>
              <li>Integrated EmailJS to handle contact form submissions and client-side email delivery.</li>
            </ul>

            <div className='selectec-work'>
              <h4>Selected Work:</h4>
              <h5>
                <a
                  href="https://www.carolavitale.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  carolavitale.com — Personal Portfolio
                </a>
              </h5>
              <p>Tech Stack: React · JavaScript · HTML5 · CSS3 · Responsive Design · UI/UX · EmailJS</p>

              <h5>
                <a
                  href="https://www.souraw.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  souraw.com — Artisanal bakery & brand website
                </a>
              </h5>
              <p>Tech Stack: React · JavaScript · HTML5 · CSS3 · Responsive Design · UI/UX  · Firebase (Firestore) · REST APIs</p>

              <h5>
                <a
                  href="https://www.bymiguelbravo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bymiguelbravo.com — Restaurant & chef website
                </a>
              </h5>
              <p>Tech Stack: React · JavaScript · HTML5 · CSS3 · Responsive Design · UI/UX · Animations & Motion: Framer Motion</p>
            </div>

            <div className='cv-pe'>
              <h4>Santander Start Program</h4>
              <h5>Santander Global T&O | Financial Services</h5>
              <h5>Apr 2022 - Oct 2022</h5>
              <ul className='experience-list'>
                <li>Contributed to the design and development of an internal inventory management application built from scratch.</li>
                <li>Worked with large datasets using Python and SQL, managing application logic and database interactions.</li>
                <li>Collaborated with cross-functional teams in a corporate environment to deliver scalable and maintainable solutions.</li>
                <li>Participated in Agile development cycles (Scrum), including sprint planning, daily stand-ups, and reviews.</li>
                <li>Applied software development best practices to ensure code quality and long-term scalability.</li>
                <li>Collaborated with design tools such as Figma, applying design systems, consistent spacing, and visual hierarchy best practices.</li>
              </ul>

              <div className='selectec-work'>
                <p>Tech Stack: JavaScript · HTML5 · CSS3 · Python · SQL · Relational Databases</p>
              </div>
            </div>

            <div className='cv-pe'>
              <h4>Corporate Sales Executive</h4>
              <h5>Global Exchange Group | Currencies Expert</h5>
              <h5>Feb 2020 — Mar 2022</h5>
              <ul className='experience-list'>
                <li>Led and implemented a remote sales initiative, contributing to a 20% increase in customer acquisition.</li>
                <li>Maintained direct communication with clients, partner agencies and business stakeholders, building long-term relationships and aligning commercial objectives.</li>
                <li>Trained and mentored sales agents and external partners, delivering product, platform and service training.</li>
                <li>Coordinated cross-team efforts and defined performance objectives for distributed sales teams.</li>
                <li>Improved agency performance and success rates by 35–45% through continuous follow-up, process optimization and communication.</li>
              </ul>
            </div>

          </div>

          <div>
            <h3>EDUCATION</h3>

            <div className="education">

              <div className="edu-item">
                <span className="edu-title">Web Development Bootcamp</span>
                <span className="edu-year">2021</span>
                <span className="edu-school">Ironhack</span>
              </div>

              <div className="edu-item">
                <span className="edu-title">Digital Marketing Specialist for Luxury Brand</span>
                <span className="edu-year">2020</span>
                <span className="edu-school">Condé Nast College Spain</span>
              </div>

              <div className="edu-item">
                <span className="edu-title">Master in Marketing and Sales Management</span>
                <span className="edu-year">2020</span>
                <span className="edu-school">EAE Business School</span>
              </div>

              <div className="edu-item">
                <span className="edu-title">Fashion Designer</span>
                <span className="edu-year">2013</span>
                <span className="edu-school">Centro Instituto de Diseño Gráfico (CIDIG)</span>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='cv-footer'>

        <div className='cv-languages'>
          <h3>LANGUAGES</h3>
          <p>Spanish (Native) | English (Advanced) | Italian (Intermediate)</p>
        </div>

        <div className='cv-right'>
            <a
              href="https://www.carolavitale.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio: carolavitale.com
            </a>

            <a
              href="https://www.linkedin.com/in/carolinavitale"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn: linkedin.com/in/carolinavitale
            </a>

            <a
              href="https://github.com/carolinavitale"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: github.com/carolinavitale
            </a>
          
        </div>
      </div>
    </>
  );
}

export default Curriculum;
