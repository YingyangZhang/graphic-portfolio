import React from "react";

export default function ExpAndSkills({handleToggle}) {
    return (
        <div className="left-container">
            <div className="exp-skills-container">
                <div className="exp-container">
                    <p className="header">
                        Experience
                    </p>

                    <div className="jobs-container">
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
                    </div>
                </div>

                <div className="skills-container">
                    <p className="header">
                        Skills
                    </p>
                    
                    <div className="skills">
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
                            <p className="skill">Ruby on Rails</p>
                        </div>
                    </div>
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