import { useState } from 'react';
import { Link } from "react-router-dom";
import { OpacityOff, OpacityOn, MenuPosition } from '../types';
import { useWindowDimensions } from '../hooks';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [btnInitialized, setBtnInitialized] = useState(false);
    const { width } = useWindowDimensions();

    const pages = ["HOME", "BIO", "IMAGES", "FILM", "LECTURE AS RESEARCH", "SCULPTURE AS INSTALLATION", "CONTACT"];
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

    const menuPositionOpen: MenuPosition = {
        top: "0px"
    }

    const menuPositionClosed: MenuPosition = {
        top: "30px"
    }
    return (
        <div className={width < 1080 ? "header" : "header--wide"}>
            {/* <div className="header__title">
                <h1 className="header__text">
                    Megan
                    <br></br>
                    &nbsp;&nbsp;&nbsp;Powell
                </h1>
            </div> */}
            <nav className={width < 1080 ? "header__nav" : "header__nav--wide"}>
                <ul className={width < 1080 ? "header__menu" : "header__menu--wide"} style={width < 1080 ? menuOpen ? menuPositionOpen : menuPositionClosed : {}}>
                    {pages.map((page: string, idx: number): React.ReactElement => (
                        <li className={width < 1080 ? "header__link" : "header__link--wide"} key={page + "-" + idx} style={width < 1080 ? menuOpen ? visible : invisible : {}}>
                            <Link to={page === "Home" ? "/" : "/" + page.toLowerCase().replace(/\s+/g, "-")}>{page}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="header__burger" style={width > 1080 ? { display: "none" } : { display: "block" }}>
                <button className="header__button" onClick={toggleBtn}>
                    <div className={btnInitialized ? menuOpen ? "header__button--top burger__top--open" : "header__button--top burger__close" : "header__button--top"}></div>
                    <div className="header__button--patty" style={menuOpen ? invisible : visible}></div>
                    <div className={btnInitialized ? menuOpen ? "header__button--bottom burger__bottom--open" : "header__button--bottom burger__close" : "header__button--bottom"}></div>
                </button>
            </div>
        </div>
    )
}

export default Nav