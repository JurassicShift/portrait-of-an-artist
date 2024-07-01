import { useState, useEffect } from "react";
import { timerId } from "../types/index";

const LandingText = ({ activate }: { activate: boolean }) => {
    const firstName = ["e", "g", "a", "n"];
    const surName = ["o", "w", "e", "l", "l"];
    const [runText, setRunText] = useState(false);

    const showText = (arr: string[]) => {
        return arr.map((letter: string, idx: number) => (
            <span key={letter + "-" + idx}>{letter}</span>
        ))
    }
    let timer = timerId;

    useEffect(() => {
        timer = setTimeout(() => {
            setRunText(true);
            return clearTimeout(timer);
        }, 2000);
    }, [])

    return (
        <>
            {
                activate && <h1 className="landingText">
                    M{runText ? showText(firstName) : null}
                    <br></br>
                    &nbsp;&nbsp;&nbsp;P{runText ? showText(surName) : null}
                </h1>
            }
        </>
    )
}

export default LandingText;