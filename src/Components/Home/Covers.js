import React from "react";
import { useNavigate } from "react-router-dom";
import { Projects } from "../Projects";

export default function Covers() {
    const navigate = useNavigate();

    return (
        <div className="right-container" id="destination">
            {Projects.map(project => {
                return (
                    <div className="cover" key={project.id} onClick={() => navigate(`/${project.id}`)}>
                        
                        <div className="cover-info-container">
                            <div className="cover-info">
                                <p className="title-reg">{project.name}</p>
                                <p className="title-obli">{project.type}</p>
                            </div>
                            
                            <p className="year-obli">{project.year}</p>
                        </div>

                        <div className="cover-img-container">
                            <img src={project.images.cover_image} alt='cover' />
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}