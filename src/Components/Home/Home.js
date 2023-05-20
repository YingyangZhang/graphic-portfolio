import React, { useState } from "react";
import Intro from "./Intro";
import ExpAndSkills from "./ExpAndSkills";
import Covers from "./Covers";

export default function Home() {
    const [isToggled, setIsToggled] = useState(false);

    function handleToggle() {
        setIsToggled(!isToggled);
    }

    return (
        <div className="main container">
            {isToggled ? <ExpAndSkills handleToggle={handleToggle} /> : <Intro handleToggle={handleToggle} />}
    
            <Covers />
        </div>
    )
}