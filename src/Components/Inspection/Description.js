import React from "react";
import { useNavigate } from "react-router-dom";

export default function Description({Projects, project, handleLeft, handleRight}) {
    const navigate = useNavigate();

    return (
        <div className="left-container left-container-for-inspection">
            <div className="description-container">
                <p className="text-big">{project.description}</p>

                <div className="project-details-container">
                    <div className="project-details">
                        <p className="title-reg">{project.name}</p>
                        <p className="title-obli">{project.type}</p>
                    </div>
                    
                    <p className="year-obli">{project.year}</p>
                </div>
            </div>

            <div className="bottom bottom-for-description">
                {project.id === 1 ? 
                null : 
                <div className="arrow-container rotate" onClick={handleLeft}>
                    <img src="https://my-grapic-design-portfolio.s3.amazonaws.com/arrow.png" alt="arrow"/>
                </div>
                }
                
                <p className="to-home-action" onClick={() => navigate('/')}>Back to Home</p>

                {project.id === Projects.length ?
                null:
                <div className="arrow-container" onClick={handleRight}>
                    <img src="https://my-grapic-design-portfolio.s3.amazonaws.com/arrow.png" alt="arrow"/>
                </div>
                }
            </div>
        </div>
    )
}