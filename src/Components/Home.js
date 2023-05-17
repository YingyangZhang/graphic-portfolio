import React, { useState } from "react";
import Intro from "./Intro";
import ExpAndSkills from "./ExpAndSkills";

export default function Home() {
    const [isToggled, setIsToggled] = useState(false);

    function handleToggle() {
        setIsToggled(!isToggled);
    }

    return (
        <div className="home container">
            <div className="about-container">
                {isToggled ? <ExpAndSkills handleToggle={handleToggle} /> : <Intro handleToggle={handleToggle} />}
            </div>
        </div>
    )
}