import { useState, useEffect } from 'react';
import { OpacityOff, OpacityOn } from '../../types';

const Nav = () => {

    const [btnClicked, setBtnClicked] = useState(false);

    const toggleBtn = () => {
        setBtnClicked(prev => !prev);
    }


    const btnPattyVisible: OpacityOn = {
        opacity: "1",
        transition: "all 500ms"
    }

    const btnPattyInvisible: OpacityOff = {
        opacity: "0",
        transition: "all 500ms"
    }
    return (
        <div className="header">
            <div className="header__title">
                <h1 className="header__text">
                    Megan
                    <br></br>
                    &nbsp;&nbsp;&nbsp;Powell
                </h1>
            </div>
            <div className="header__burger">
                <button className="header__button" onClick={toggleBtn}>
                    <div className="header__button--top"></div>
                    <div className="header__button--patty" style={btnClicked ? btnPattyInvisible : btnPattyVisible}></div>
                    <div className="header__button--bottom"></div>
                </button>
            </div>
        </div>
    )
}

export default Nav