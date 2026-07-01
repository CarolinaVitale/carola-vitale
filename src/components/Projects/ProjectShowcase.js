import React from "react";
import "./ProjectShowcase.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import sourawImg from "../../images/project1.webp";
import miguelImg from "../../images/project2.webp";

import Button from "../Button/Button";

const showcaseProjects = [
    {
        title: "SOURAW",
        image: sourawImg,
        live: "https://souraw.com/",
        github: "https://github.com/CarolinaVitale/souraw.git",
    },
    {
        title: "By Miguel Bravo",
        image: miguelImg,
        live: "https://bymiguelbravo.com",
        github: "https://github.com/CarolinaVitale/bymiguelbravo",
    },
];

function ProjectShowcase() {
    const [headerRef, headerInView] = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    const [cardsRef, cardsInView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <section className="project-showcase" id="projects">
            <motion.div
                ref={headerRef}
                initial={{ opacity: 0, y: -40 }}
                animate={{
                    opacity: headerInView ? 1 : 0,
                    y: headerInView ? 0 : -40,
                }}
                transition={{ duration: 0.5 }}
                className="project-showcase__header"
            >
                <p className="project-showcase__kicker">EXPLORE MY WORK</p>
                <h1 className="project-showcase__title">PROJECTS</h1>
            </motion.div>

            <motion.div
                ref={cardsRef}
                initial={{ opacity: 0, y: 40 }}
                animate={{
                    opacity: cardsInView ? 1 : 0,
                    y: cardsInView ? 0 : 40,
                }}
                transition={{ duration: 0.5 }}
                className="project-showcase__grid"
            >
                {showcaseProjects.map((project) => (
                    <article className="project-showcase__card" key={project.title}>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <img
                                src={project.image}
                                alt={`${project.title} preview`}
                                className="project-showcase__image"
                            />
                        </a>

                        <h2 className="project-showcase__card-title">{project.title}</h2>

                        <div className="project-showcase__buttons">
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
                    </article>
                ))}
            </motion.div>
        </section>
    );
}

export default ProjectShowcase;