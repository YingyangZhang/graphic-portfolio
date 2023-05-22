import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Description({ Projects, project, handleLeft, handleRight }) {
  const navigate = useNavigate();

  return (
    <div key={project.id} className="left-container left-container-for-inspection">
        <div className="description-container">
            <motion.p
            className="text-big"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}>
                {project.description}
            </motion.p>

            <motion.div 
            className="project-details-container"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: .3 }}>
            <div className="project-details">
                <p className="title-reg">{project.name}</p>
                <p className="title-obli">{project.type}</p>
            </div>

            <p className="year-obli">{project.year}</p>
            </motion.div>
        </div>

        <div className="bottom bottom-for-description">
            {project.id === 1 ? null : (
            <div className="arrow-container rotate" onClick={handleLeft}>
                <img src="https://my-grapic-design-portfolio.s3.amazonaws.com/arrow.png" alt="arrow" />
            </div>
            )}

            <p className="to-home-action" onClick={() => navigate("/")}>
            Back to Home
            </p>

            {project.id === Projects.length ? null : (
            <div className="arrow-container" onClick={handleRight}>
                <img src="https://my-grapic-design-portfolio.s3.amazonaws.com/arrow.png" alt="arrow" />
            </div>
            )}
        </div>
    </div>
  );
}
