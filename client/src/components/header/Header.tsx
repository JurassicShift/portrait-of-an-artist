import { useState } from 'react';
import { OpacityOff, OpacityOn } from '../../types';
import { useWindowDimensions } from '../../hooks';
import Nav from "../nav/Nav";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [btnInitialized, setBtnInitialized] = useState(false);
    const { width } = useWindowDimensions();

    const toggleBtn = () => {
        setMenuOpen(prev => !prev);
        if (!btnInitialized) {
            setBtnInitialized(true);
        }
    }


    const visible: OpacityOn = {
        opacity: "1",
    }

    const invisible: OpacityOff = {
        opacity: "0",
    }

    return (
        <>
            <div className="header">
                <div className={width < 1080 ? "header__menu" : "header__menu--wide"}>
                    <div className="header__burger" style={width > 1080 ? { display: "none" } : { display: "block" }}>
                        <button className="header__button" onClick={toggleBtn}>
                            <div className={btnInitialized ? menuOpen ? "header__button--top burger__top--open" : "header__button--top burger__close" : "header__button--top"}></div>
                            <div className="header__button--patty" style={menuOpen ? invisible : visible}></div>
                            <div className={btnInitialized ? menuOpen ? "header__button--bottom burger__bottom--open" : "header__button--bottom burger__close" : "header__button--bottom"}></div>
                        </button>
                    </div>
                </div>
                <Nav menuOpen={menuOpen} />
            </div>
        </>
    )
}

export default Header;