import React from "react";
import { useNavigate } from "react-router-dom";

export default function Images({Projects, project, handleLeft, handleRight}) {
    const navigate = useNavigate();

    return (
        <div className="right-container">
            {project.images.all_images.map((image, index) => {
                return (
                    <div className="inspection-img-container" key={index}>
                        <img src={image} alt="image" />
                    </div>
                )
            })}

            <div className="bottom bottom-images">
                {project.id === 1 ? 
                null : 
                <div className="arrow-container rotate" onClick={handleLeft}>
                    <img src="https://my-grapic-design-portfolio.s3.amazonaws.com/arrow-blk.png" alt="arrow"/>
                </div>
                }
                
                <p className="to-home-action" onClick={() => navigate('/')}>Back to Home</p>

                {project.id === Projects.length ?
                null:
                <div className="arrow-container" onClick={handleRight}>
                    <img src="https://my-grapic-design-portfolio.s3.amazonaws.com/arrow-blk.png" alt="arrow"/>
                </div>
                }
            </div>
        </div>
    )
}