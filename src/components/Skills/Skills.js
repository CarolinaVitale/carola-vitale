import React, { useState } from 'react';
import '../Skills/Skills.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const skillsData = {
    hardSkills: [
        {
            icon: <i className="fa-solid fa-arrow-pointer"></i>,
            title: 'FRONTEND DEVELOPMENT',
            description: 'I translate concepts into reality within the browser, building from the ground up.',
        },
        {
            icon: <i className="fa-solid fa-link"></i>,
            title: 'WEB APPLICATIONS',
            description: 'Crafting dynanic and user-friendly web experiences.',
        },
        {
            icon: <i className="fa-solid fa-terminal"></i>,
            title: 'DEPLOYMENTS & HOSTING',
            description: 'Guaranteeing seamless deployments and dependable hosting for web applications.',
        },
        {
            icon: <i className="fa-solid fa-pen-fancy"></i>,
            title: 'UI/UX DESIGN',
            description: 'Creating websites and applications focusing on enhancing user experience through thoughtful design and interaction.',
        },
        {
            icon: <i className="fa-solid fa-palette"></i>,
            title: 'VISUAL IDENTITY',
            description: 'I design unique and cohesive visual itentities that reflect the essence and values of brands and projects.',
        },
        {
            icon: <i className="fa-solid fa-camera"></i>,
            title: 'PHOTOGRAPHY',
            description: 'I capture moments and emotions through my lens, creating captivating visual stories.',
        },
    ],

    softSkills: [
        {
            icon: <i className="fa-solid fa-fingerprint"></i>,
            title: 'CREATIVITY',
            description: 'Thinks outside the box, generates inventive ideas, and approaches tasks with originality and imagination. ',
        },
        {
            icon: <i className="fa-solid fa-puzzle-piece"></i>,
            title: 'PROBLEM SOLVING',
            description: ' Identifies challenges, analyzes root causes, and develops innovative solutions to overcome obstacles.',
        },
        {
            icon: <i className="fa-solid fa-stopwatch"></i>,
            title: 'TIME MANAGEMENT',
            description: 'Efficiently prioritizes tasks, organizes schedules, and meets deadlines to deliver high-quality results.',
        },
        {
            icon: <i className="fa-solid fa-dice-d20"></i>,
            title: 'ADAPTABILITY',
            description: 'Quickly adjusts to new situations, embraces change, and remains flexible in dynamic work settings.',
        },
        {
            icon: <i className="fa-solid fa-comments"></i>,
            title: 'COMMUNICATION',
            description: 'Clear and effective in conveying ideas, fostering open dialogue and understanding among team members and stakeholders.',
        },
        {
            icon: <i className="fa-solid fa-user-group"></i>,
            title: 'LEADERSHIP',
            description: 'Demonstrates the ability to guide and inspire others, making sound decisions and fostering a positive work environment.',
        },
    ],
};

const SkillBox = ({ icon, title, description }) => {
    const { ref, inView } = useInView({ threshold: 0.5 });

    return (
        <motion.div
            ref={ref}
            className="skill-box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5 }}
        >
            <div className="icon">{icon}</div>
            <div className='content'>
                <br />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </motion.div>
    );
};

const SkillsSection = ({ skills }) => (
    <div className="skills-section">
        {skills.map((skill, index) => (
            <SkillBox key={index} {...skill} />
        ))}
    </div>
);

const Skill = () => {
    const [currentSkills, setCurrentSkills] = useState('hardSkills');

    const handleSkillsChange = (skillsType) => {
        console.log('cambio de habilidades', skillsType);
        setCurrentSkills(skillsType);
    };

    return (
        <div className="skills">
            <p className="section__text__p1-project">DISCOVER MY ABILITIES</p>
            <h1 className="title-project">SKILLS</h1>
            <br /> <br /> <br />
            <div className="buttons">
                <button
                    className={currentSkills === 'hardSkills' ? 'active' : ''}
                    onClick={() => handleSkillsChange('hardSkills')}
                >
                    CRAFT SKILLS
                </button>
                <button
                    className={currentSkills === 'softSkills' ? 'active' : ''}
                    onClick={() => handleSkillsChange('softSkills')}
                >
                    SOFT SKILLS
                </button>
            </div>

            <SkillsSection skills={skillsData[currentSkills]} />
        </div>
    );
};

export default Skill;