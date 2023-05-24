import React from "react";
import { useNavigate } from "react-router-dom";
import { Projects } from "../Projects";
import { motion} from "framer-motion";

export default function Covers() {
    const navigate = useNavigate();

    return (
        <div className="right-container" id="destination">
            {Projects.map(project => {
                return (
                    <div className="cover-container" key={project.id} onClick={() => navigate(`/${project.id}`)}>
                        
                        <div className="cover-info-container">
                            <div className="cover-info">
                                <p className="title-reg">{project.name}</p>
                                <p className="title-obli">{project.type}</p>
                            </div>
                            
                            <p className="year-obli">{project.year}</p>
                        </div>

                        <motion.div 
                        className="cover-img-container"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeOut", duration: .5 }}>
                            <img src={project.images.cover_image} alt='cover' />
                        </motion.div>
                    </div>
                )
            })}
            
        </div>
    )
}