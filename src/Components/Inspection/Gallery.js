import React from "react";
import { useNavigate } from "react-router-dom";
import { motion} from "framer-motion";

export default function Gallery({Projects, project, handleLeft, handleRight}) {
    const navigate = useNavigate();

    return (
        <div className="right-container">
            {project.images.all_images.map((image, index) => {
                return (
                    <motion.div 
                    className="inspection-img-container" 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeOut", duration: .5 }}>
                        <img src={image} alt="image" />
                    </motion.div>
                )
            })}

            <div className="bottom bottom-for-gallery">
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