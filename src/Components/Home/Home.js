import React, { useState } from "react";
import Intro from "./Intro";
import About from "./About";
import Covers from "./Covers";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
    const [isToggled, setIsToggled] = useState(false);

    function handleToggle() {
        setIsToggled(!isToggled);
    }

    return (
        <div className="main-container container">
            <AnimatePresence>
                {isToggled ? <About handleToggle={handleToggle} /> : <Intro handleToggle={handleToggle} />}
            </AnimatePresence>

            <Covers />
        </div>
    )
}