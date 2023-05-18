import React from "react";
import { Projects } from "../Projects";

export default function Covers() {
    return (
        <div className="covers" id="destination">
            {Projects.map(project => {
                return (
                    <div className="cover" key={project.id}>
                        
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