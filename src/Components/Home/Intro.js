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
                    Yingyang Zhang is a &nbsp;<span>Graphic Designer</span>&nbsp; with over three years of experience as a graphic designer, 
                    specializing in creating engaging and detail-oriented visual content for digital and print media using a variety of Adobe 
                    tools. Expertise spans branding, advertisement, social media posts, animations, presentations, web design, etc. Knowledge 
                    of HTML, CSS, and JavaScript enables tackling diverse design projects and collaborating effectively with various departments.
                </motion.p>
                
                <motion.div initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0, transition: {duration: .5, delay: .3}}}>
                    <motion.div className="intro-action" onClick={handleToggle}
                    
                    whileHover={{ opacity: 0.5, transition: { duration: .3, delay: 0 } }}>
                        <p>Experience & Skills</p>
                        
                        <div className="intro-arrow-container">
                            <img src="https://my-grapic-design-portfolio.s3.amazonaws.com/arrow.png" alt="arrow"/>
                        </div>
                    </motion.div>
                </motion.div>

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