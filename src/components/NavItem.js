import { NavLink } from "react-router-dom";

const NavItem = (props) => {
    const { planet } = props;
    
    return (
        <li className="navbar-item">
            <NavLink 
                activeclassname="active" 
                to={`${planet.toLowerCase()}`}
                className="navbar-link">
                {planet.toUpperCase()}
            </NavLink>
        </li>
    )
}

export default NavItem;