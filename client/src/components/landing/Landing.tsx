import { useState, useEffect } from "react";
import { timerId, AnimationObj, OpacityOn, OpacityOff, TearDown } from "../../types/index";
import LandingText from "./LandingText";
import LandingImg from "../../assets/landing.jpg";

const Landing = ({ isAnimationComplete }: { isAnimationComplete: boolean }) => {
    const [addText, setAddText] = useState(false);
    const [tearDownDisplay, setTearDownDisplay] = useState(false);

    let timer = timerId;
    let tearDownTimer = timerId;

    useEffect(() => {
        timer = setTimeout(() => {
            setAddText(true);
            return clearTimeout(timer);
        }, 1250);
    }, []);

    useEffect(() => {
        if (isAnimationComplete) {
            tearDownTimer = setTimeout(() => {
                setTearDownDisplay(true);
                return clearTimeout(tearDownTimer);
            }, 750);
        }

    }, [isAnimationComplete]);



    const openBrackets: OpacityOn = {
        opacity: "1"
    }

    const closeBrackets: OpacityOff = {
        opacity: "0",
        transition: "opacity 0.25s ease-in"
    }

    const completeAnimation: AnimationObj = {
        position: "absolute",
        top: "0%",
        left: "23%",
        fontSize: "20px",
        letterSpacing: "1px",
        margin: "20px 0 0 20px",
        opacity: "0",
        transition: "all 0.75s ease-in"
    }

    const startAnimation: AnimationObj = {
        position: "absolute",
        top: "30%",
        left: "50%",
        fontSize: "50px",
        letterSpacing: "2px",
        transition: "",
        margin: "0 -18px 0 -18px"
    }

    const tearDown: TearDown = {
        display: "none",
    }

    return (
        <div className="landing">
            {
                isAnimationComplete && <img src={LandingImg} alt="landing page image"></img>
            }
            <div style={tearDownDisplay ? tearDown : {}}>
                <div className="landing__content" style={isAnimationComplete ? completeAnimation : startAnimation}>
                    <span className="landing__content--open" style={isAnimationComplete ? closeBrackets : openBrackets}>[</span> <LandingText activate={addText} /><span className="landing__content--close" style={isAnimationComplete ? closeBrackets : openBrackets}>]</span>
                </div>
            </div>

        </div>
    )
}

export default Landing;