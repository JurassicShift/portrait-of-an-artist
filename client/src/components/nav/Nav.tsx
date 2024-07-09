import { useState } from 'react';
import { OpacityOff, OpacityOn } from '../../types';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [btnInitialized, setBtnInitialized] = useState(false);

    const toggleBtn = () => {
        setMenuOpen(prev => !prev);
        if (!btnInitialized) {
            setBtnInitialized(true);
        }
    }


    const btnPattyVisible: OpacityOn = {
        opacity: "1",
    }

    const btnPattyInvisible: OpacityOff = {
        opacity: "0",
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
                    <div className={btnInitialized ? menuOpen ? "header__button--top burger__top--open" : "header__button--top burger__close" : "header__button--top"}></div>
                    <div className="header__button--patty" style={menuOpen ? btnPattyInvisible : btnPattyVisible}></div>
                    <div className={btnInitialized ? menuOpen ? "header__button--bottom burger__bottom--open" : "header__button--bottom burger__close" : "header__button--bottom"}></div>
                </button>
            </div>
        </div>
    )
}

export default Nav