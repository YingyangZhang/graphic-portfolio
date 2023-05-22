import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Projects } from "../Projects";
import Description from "./Description";
import Gallery from "./Gallery";

export default function Inspection() {
    const { id } = useParams();
    const project = Projects[id - 1];
    const navigate = useNavigate();

    function handleLeft() {
        navigate(`/${project.id - 1}`);
    }

    function handleRight() {
        navigate(`/${project.id + 1}`);
    }

    return (
        <div className="main-container container">
            <Description Projects={Projects} project={project} handleLeft={handleLeft} handleRight={handleRight} />

            <Gallery Projects={Projects} project={project} handleLeft={handleLeft} handleRight={handleRight} />
        </div>
    )
}