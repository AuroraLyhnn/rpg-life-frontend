import Blue from '../../../assets/page/bookmark/blue.png';
import Purple from '../../../assets/page/bookmark/purple.png';
import Green from '../../../assets/page/bookmark/green.png';
import { NavLink } from "react-router-dom";
import "./Bookmarks.css"

function Bookmarks() {
    return (
        <nav>
            <li className="blue-bookmark bg-style">
                <NavLink to="/" className={({ isActive }) => isActive === true? 'active-link' : 'default-link'}>
                    To Do
                </NavLink>
            </li>
            <li className="green-bookmark bg-style">
                <NavLink to="/hero_quest" className={({ isActive }) => isActive === true? 'active-link' : 'default-link'}>
                    <span>Hero</span> <span>Quest</span>
                </NavLink>
            </li>
            <li className="purple-bookmark bg-style">
                <NavLink to="/guild_card" className={({ isActive }) => isActive === true? 'active-link' : 'default-link'}>
                    <span>Guild</span> <span>Card</span>
                </NavLink>
            </li>
        </nav>
    )
}

export default Bookmarks