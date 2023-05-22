import React from "react";

export default function Intro({handleToggle}) {
    return (
        <div className="left-container">
            <div className="intro-container">
                <p className="text-big">
                    Yingyang Zhang is a graphic designer with 2 years of
                    experience in designing engaging visual content for
                    both digital and print media, skilled in using a variety
                    of design tools and software. Expertise includes
                    branding, logo design, print and web design, and
                    multimedia presentations. Additionally, also have a
                    thorough understanding of HTML, CSS,
                    JavaScript-based programming, and Ruby on Rails.
                </p>
                
                <div className="intro-action" onClick={handleToggle}>
                    <p>Experience & Skills</p>
                    
                    <div className="intro-arrow-container">
                        <img src="https://my-grapic-design-portfolio.s3.amazonaws.com/arrow.png" alt="arrow"/>
                    </div>
                </div>

                <a href="#destination" className="to-portfolio-action">
                    <p>Portfolio</p>
                </a>
            </div>

            <div className="bottom bottom-for-intro">
                <p>yingyang.zhang95@gmail.com</p>
                <p>2023©</p>
            </div>
        </div>
    )
}