import React from "react";
import { motion} from "framer-motion";

export default function Intro({handleToggle}) {
    return (
        <div className="left-container">
            <div className="intro-container">
                <motion.p 
                className="text-big"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: .5 }}>
                    Yingyang Zhang is a &nbsp;<span>Graphic Designer</span>&nbsp; with 2 years of
                    experience in designing engaging visual content for
                    both digital and print media, skilled in using a variety
                    of design tools and software. Expertise includes
                    branding, logo design, print and web design, and
                    multimedia presentations. Additionally, also have a
                    thorough understanding of HTML, CSS,
                    JavaScript-based programming, and Ruby on Rails.
                </motion.p>
                
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
                <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: .5, delay: .3 }}>
                    yingyang.zhang95@gmail.com
                </motion.p>
                <p>2023©</p>
            </div>
        </div>
    )
}