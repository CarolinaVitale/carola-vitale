import React from 'react';
import '../Curriculum/Curriculum.css'

function Curriculum() {

    return (
        <>
            <div className='curriculum'>

                <div className='cv-tittle'>
                    <h1>CAROLINA VITALE</h1>
                    <h2>WEB DEVELOPER</h2>
                </div>

                <div>
                    <p className='cv-skills'>JAVASCRIPT  •  REACT.JS  •  NODE.JS  •  EXPRESS.JS  •  MONGODB  •  REST APIs • HTML5  •  CSS3  • SQL • GIT • FIGMA • ENGLISH C1 </p>
                    <p className='cv-profile'>Full-stack MERN Developer with two years of web development experience and a sales background. I've led projects across sectors including sales, banking, and tourism. My passion for technology merges with adaptability, constantly seeking challenges that demand conceptual and analytical thinking for innovative solutions.</p>
                </div>

                <div>
                    <h3>PROJECTS</h3>
                    <div className='cv-projects'>
                        <h4>ocho trece</h4>
                        <h4>https://ochotrece.restaurant/ </h4>
                        <h4>HTML5 · CSS · JAVASCRIPT· REACT.JS</h4>
                        <p>Application that captivates visitors with elegant animations and a
                            seamless experience on any device. It's a standout example of how
                            creativity and technology merge to anticipate and promote an exciting
                            culinary experience.</p>
                    </div>

                    <div className='cv-projects'>
                        <h4>by Miguel Bravo</h4>
                        <h4>https://byMiguelBravo.com/ </h4>
                        <h4>HTML5 · CSS · JAVASCRIPT· REACT.JS </h4>
                        <p>Dynamic and responsive platform meticulously designed to authentically
                            reflect brand identity, while also highlighting products and services.
                        </p>

                    </div>

                    <div className='for-words'>
                        <h4>For Words</h4>
                        <h4>https://for-words.herokuapp.com/</h4>
                        <h4>HTML5 · CSS · JAVASCRIPT· REACT.JS · REST APIs · EXPRESS.JS · NODE.JS · MONGODB</h4>
                        <p>App where you can give your unused items a new purpose (donate).</p>
                    </div>

                </div>

                <div className='display-flex'>
                    <div className='column-1'>
                        <h3>PROFESSIONAL EXPERIENCE</h3>
                        <div className='cv-pe'>
                            <h4>Santander Start Program</h4>
                            <h5>Santander Global T&O | Financial Services</h5>
                            <h5>Apr 2022 - Present</h5>
                            <p>Analysed current information structure of all existing tools and defined the necessary infrastructure for the project.</p>
                            <p>Tool programming and screen design management and selected the most optimal language for the project.</p>
                            <p>Defined the online historical reporting and user module.</p>

                        </div>

                        <div>
                            <h4>Corporate Sales Executive</h4>
                            <h5>Global Exchange Group | Currencies Expert</h5>
                            <h5>Feb 2020 – Mar 2022</h5>
                            <p>Find common ground with customers to reach agreement on sale terms, consolidated customer acquisitions by 20%. </p>
                            <p>Led training programs overseeing all aspects of the products, virtual platforms and services.</p>
                            <p>Supplied superior customer service training and presentations to external and internal stakeholders, efficiently coordinating relations efforts.</p>
                        </div>

                    </div>

                    <div className='column-2'>
                        <h3>EDUCATION</h3>

                        <h4>Web Development Bootcamp</h4>
                        <h4>2021</h4>
                        <p>Ironhack</p>
                        <br />
                        <h4>Digital Marketing Specialist for Luxury Brand</h4>
                        <h4>2020</h4>
                        <p>Conde Nast College Spain</p>
                        <br />
                        <h4>Master in Marketing and Sales Management</h4>
                        <h4>2020</h4>
                        <p>EAE Business School</p>
                        <br />
                        <h4>Fashion Designer</h4>
                        <h4>2013</h4>
                        <p>Centro Instituto de Diseño Gráfico (CIDIG)</p>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Curriculum;