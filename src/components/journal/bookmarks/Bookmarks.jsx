import Blue from '../../../assets/page/bookmark/blue.png';
import Purple from '../../../assets/page/bookmark/purple.png';
import Green from '../../../assets/page/bookmark/green.png';
import { NavLink } from "react-router-dom";

function Bookmarks() {
    return (
        <nav>
            <li>
                <NavLink to="/to_do" className={({ isActive }) => isActive === true? 'active-link' : 'default-link'}>
                    To Do
                </NavLink>
            </li>
            <li>
                <NavLink to="/hero_quest" className={({ isActive }) => isActive === true? 'active-link' : 'default-link'}>
                    Hero Quest
                </NavLink>
            </li>
            <li>
                <NavLink to="/guild_card" className={({ isActive }) => isActive === true? 'active-link' : 'default-link'}>
                    Guild Card
                </NavLink>
            </li>
        </nav>
    )
}

export default Bookmarks