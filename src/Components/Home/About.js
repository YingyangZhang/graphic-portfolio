import React from "react";
import { motion} from "framer-motion";

export default function About({handleToggle}) {
    return (
        <div className="left-container">
            <div className="about-container">
                <div className="exp-container">
                    <motion.p 
                    className="header"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: .5 }}>
                        Experience
                    </motion.p>

                    <motion.div 
                    className="jobs-container"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: .5, delay: .3 }}>
                        <div className="job">
                            <div className="name-time-container">
                                <p className="title-reg">Accelerate 360</p>

                                <p className="year-obli">2021 - 2022</p>
                            </div>

                            <div className="title-details-container">
                                <p className="title-obli">Graphic Designer</p>

                                <p className="job-details">
                                    Digital Ads, Web Banners, Animations, Posters,
                                    Social Media Posts, Presentations, Logos, Icons
                                </p>
                            </div>
                        </div>

                        <div className="job">
                            <div className="name-time-container">
                                <p className="title-reg">SocietyRow</p>

                                <p className="year-obli">2020 - 2021</p>
                            </div>

                            <div className="title-details-container">
                                <p className="title-obli">Graphic Designer</p>

                                <p className="job-details">
                                    Social Media Posts, Instagram Stories, Layouts,
                                    Digital Ads, Photo Editing
                                </p>
                            </div>
                        </div>

                        <div className="job">
                            <div className="name-time-container">
                                <p className="title-reg">L.K. Creative Inc.</p>

                                <p className="year-obli">2017 - 2018</p>
                            </div>

                            <div className="title-details-container">
                                <p className="title-obli">Graphic Design Intern</p>

                                <p className="job-details">
                                    Store Signs, Billboards, Stickers, Logos, Icons,
                                    Menus, Posters
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="skills-container">
                    <motion.p 
                    className="header"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: .5, delay: .6 }}>
                        Skills
                    </motion.p>
                    
                    <motion.div 
                    className="skills"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeOut", duration: .5, delay: .9 }}>
                        <div className="design-skills-container">
                            <p className="skill">Photoshop</p>
                            <p className="skill">Illustrator</p>
                            <p className="skill">InDesign</p>
                            <p className="skill">After Effect</p>
                            <p className="skill">LightRoom</p>
                        </div>

                        <div className="cs-skills-container">
                            <p className="skill">HTML</p>
                            <p className="skill">CSS</p>
                            <p className="skill">JavaScript</p>
                            <p className="skill">ReactJS</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="bottom">
                <div className="arrow-container rotate" onClick={handleToggle}>
                    <img src="https://my-grapic-design-portfolio.s3.amazonaws.com/arrow.png" alt="arrow"/>
                </div>

                <p>2023©</p>
            </div>
        </div>
    )
}