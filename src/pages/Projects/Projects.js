import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import "../Projects/Projects.css";

import project1 from "../../images/project1.webp";
import project2 from "../../images/project2.webp";
import project3 from "../../images/carola-vitale-web.webp";

import Button from "../../components/Button/Button";
import ExperienceSlide from "../../components/ExperienceSlide/ExperienceSlide";
import Skill from "../../components/Skills/Skills";

const projects = [
    {
        title: "SOURAW",
        image: project1,
        live: "https://souraw.com/",
        github: "https://github.com/CarolinaVitale/souraw.git",
        role: "Founder · Product Design · Frontend Development",
        stack: "React · Firebase Firestore · EmailJS · CSS",
        description:
            "Designed and developed the complete digital experience for a sourdough brand, including product structure, responsive UI, customer workflows, and frontend implementation.",
        highlights: [
            "Built reusable React components.",
            "Integrated customer reviews with Firebase Firestore.",
            "Automated order requests through EmailJS.",
            "Designed a responsive experience for desktop and mobile.",
        ],
    },
    {
        title: "By Miguel Bravo",
        image: project2,
        live: "https://bymiguelbravo.com",
        github: "https://github.com/CarolinaVitale/bymiguelbravo",
        role: "Website Design · Frontend Development",
        stack: "React · CSS · Responsive Design",
        description:
            "Designed and developed a responsive website focused on visual storytelling, content organization, and a clean browsing experience across devices.",
        highlights: [
            "Structured the content and navigation.",
            "Designed a simple visual experience.",
            "Built responsive layouts.",
            "Optimized the interface for mobile.",
        ],
    },
    {
        title: "Carolina Vitale Portfolio",
        image: project3,
        live: "https://carolavitale.com",
        github: "https://github.com/CarolinaVitale/carola-vitale",
        role: "Portfolio · UI Design · Frontend Development",
        stack: "React · CSS · React Router",
        description:
            "Personal portfolio designed to present frontend development, UI design, and product-focused work through a minimal editorial interface.",
        highlights: [
            "Designed a custom visual identity.",
            "Built reusable sections and layouts.",
            "Created a dedicated resume page.",
            "Connected projects, experience, and contact flows.",
        ],
    },
];

function Projects() {
    const [headerRef, headerInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const [projectsRef, projectsInView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <>
            <section className="projects" id="projects">
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: -40 }}
                    animate={{
                        opacity: headerInView ? 1 : 0,
                        y: headerInView ? 0 : -40,
                    }}
                    transition={{ duration: 0.5 }}
                    className="projects-hero"
                >
                    <p className="section__text__p1-project">SELECTED WORK</p>

                    <h1 className="title-project">Projects</h1>

                    <p className="projects-intro">
                        A selection of real websites and digital products I designed,
                        developed, and shipped.
                    </p>
                </motion.div>
            </section>

            <section className="web-projects">
                <motion.div
                    ref={projectsRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{
                        opacity: projectsInView ? 1 : 0,
                        y: projectsInView ? 0 : 40,
                    }}
                    transition={{ duration: 0.5 }}
                    className="projects-containers"
                >
                    {projects.map((project, index) => (
                        <article className="projects-details-container" key={project.title}>
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-image-link"
                                aria-label={`Open ${project.title}`}
                            >
                                <img
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    className="project-img"
                                />
                            </a>

                            <div className="project-content">
                                <p className="project-number">
                                    {String(index + 1).padStart(2, "0")}
                                </p>

                                <p className="project-role">{project.role}</p>

                                <h2 className="experience-sub-title project-title">
                                    {project.title}
                                </h2>

                                <p className="project-description">{project.description}</p>

                                <p className="project-stack">{project.stack}</p>

                                <ul className="project-highlights">
                                    {project.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>

                                <div className="btn-container">
                                    <Button
                                        buttonSize="btn--medium"
                                        buttonStyle="btn--outline"
                                        where={project.github}
                                        target="_blank"
                                    >
                                        GITHUB
                                    </Button>

                                    <Button
                                        buttonSize="btn--medium"
                                        buttonStyle="btn--outline"
                                        where={project.live}
                                        target="_blank"
                                    >
                                        LIVE DEMO
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </motion.div>
            </section>

            <ExperienceSlide />
            <Skill />
        </>
    );
}

export default Projects;