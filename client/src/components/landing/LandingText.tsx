import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { timerId, nameState } from "../../types/index";
import { updateAnimationState } from '../../store/slices/landingAnimation';

const LandingText = ({ activate }: { activate: boolean }) => {
    const firstNameLetters = ["e", "g", "a", "n"];
    const secondNameLetters = ["o", "w", "e", "l", "l"];
    const dispatch = useDispatch();
    const [runText, setRunText] = useState(false);
    const [firstName, setFirst] = useState<nameState>([]);
    const [secondName, setSecond] = useState<nameState>([]);
    let timer = timerId;
    let animationCompleteTimer = timerId;
    let intervalTimer = timerId;
    let secondIntervalTimer = timerId;

    function* elementGenerator(letters: string[]) {
        for (let i = 0; i < letters.length; i++) {
            yield <span key={letters[i] + "-" + i} className="landText__span">{letters[i]}</span>
        }
    }

    function runFinalAnimation() {
        animationCompleteTimer = setTimeout(() => {
            clearInterval(animationCompleteTimer);
            return dispatch(updateAnimationState());
        }, 1000);
    }

    useEffect(() => {

        if (activate) {
            timer = setTimeout(() => {
                setRunText(true);
                return clearTimeout(timer);
            }, 750);
        }

        if (runText) {
            const firstGen = elementGenerator(firstNameLetters);
            const secondGen = elementGenerator(secondNameLetters);

            intervalTimer = setInterval(() => {
                let next = firstGen.next();
                if (next.done) {
                    clearInterval(intervalTimer);
                } else {
                    setFirst((prev) => [...prev, next.value]);
                }
            }, 100);

            secondIntervalTimer = setInterval(() => {
                let next = secondGen.next();
                if (next.done) {
                    runFinalAnimation();
                    clearInterval(secondIntervalTimer);
                } else {
                    setSecond((prev) => [...prev, next.value]);
                }
            }, 100);
        }
        return () => {
            clearTimeout(timer);
            clearInterval(intervalTimer);
            clearInterval(secondIntervalTimer);
        };
    }, [activate, runText])


    return (
        <>
            {
                activate && <h1 className="landingText">
                    M{runText ? firstName : null}
                    <br></br>
                    &nbsp;&nbsp;&nbsp;P{runText ? secondName : null}
                </h1>
            }
        </>
    )
}

export default LandingText;