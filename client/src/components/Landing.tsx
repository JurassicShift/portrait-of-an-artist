import { useState, useEffect } from "react";
import { timerId } from "../types/index";
import LandingText from "./LandingText";


const Landing = () => {
    const [addText, setAddText] = useState(false);
    let timer = timerId;

    useEffect(() => {
        timer = setTimeout(() => {
            setAddText(true);
            return clearTimeout(timer);
        }, 1250);
    }, []);

    return (
        <div className="landing">
            <div className="landing__content">
                <span className="landing__content--open">[</span> <LandingText activate={addText} /><span className="landing__content--close">]</span>
            </div>
        </div>
    )
}

export default Landing;