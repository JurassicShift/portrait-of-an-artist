// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { OpacityOff, OpacityOn, MenuPosition } from '../../types';
import { useWindowDimensions } from '../../hooks';

const Nav = ({ menuOpen }: { menuOpen: boolean }) => {

    const { width } = useWindowDimensions();

    const pages = ["HOME", "BIO", "IMAGES", "FILM", "LECTURE AS RESEARCH", "SCULPTURE AS INSTALLATION", "CONTACT"];


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

        <nav className={width < 1080 ? "nav" : "nav--wide"}>
            <ul className={width < 1080 ? "nav__menu" : "nav__menu--wide"} style={width < 1080 ? menuOpen ? menuPositionOpen : menuPositionClosed : {}}>
                {pages.map((page: string, idx: number): React.ReactElement => (
                    <li className={width < 1080 ? "nav__link" : "nav__link--wide"} key={page + "-" + idx} style={width < 1080 ? menuOpen ? visible : invisible : {}}>
                        <NavLink to={page === "HOME" ? "/" : "/" + page.toLowerCase().replace(/\s+/g, "-")} >{page}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default Nav;