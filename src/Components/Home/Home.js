import React, { useState } from "react";
import Intro from "./Intro";
import About from "./About";
import Covers from "./Covers";

export default function Home() {
    const [isToggled, setIsToggled] = useState(false);

    function handleToggle() {
        setIsToggled(!isToggled);
    }

    return (
        <div className="main-container container">
            {isToggled ? <About handleToggle={handleToggle} /> : <Intro handleToggle={handleToggle} />}
    
            <Covers />
        </div>
    )
}