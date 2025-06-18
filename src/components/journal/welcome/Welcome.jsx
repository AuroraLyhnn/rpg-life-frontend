import './Welcome.css';
import Book from "../book/Book.jsx";
import Heart from "../../../assets/page/logo.png"
import {NavLink} from "react-router-dom";

function Welcome({className}) {
    return (
            <div className={className}>
            <article className="scroll">
                <h1>Welcome, Brave Adventurer!</h1>
                <p className="welcome-story">
                    You awaken in the realm of Crysteria, where legends are forged through courage and consistency.<br/>
                    After defeating the fearsome Dragon of Rwah, your name has spread far and wide across these lands.
                    Songs are sung of your bravery, and taverns echo with tales of your triumph.<br/>
                    But a true hero's journey is never truly complete...<br/>
                    You've joined the Guild of Eternal Flames, not only to protect your village, but to take on new and
                    noble quests—ones that challenge your daily resolve and shape your future path.<br/>
                    <br/>
                    This is your Hero’s Journal.<br/>
                    <br/>
                    Here, you will:<br/>
                    - Track your daily habits and recurring routines<br/>
                    - Manage important tasks you need to finish soon<br/>
                    (Main quests)<br/>
                    - Manage lighter tasks or goals (Side Quests)<br/>
                    - Complete important personal goals (Hero Quests)<br/>
                    - Gain XP, level up<br/>
                    and earn legendary rewards for your efforts<br/>
                    <br/>
                    Each completed quest brings you closer to mastery—not just in this realm, but in your own life.<br/>
                    So, ready your sword… sharpen your focus… and begin your next great adventure.<br/>
                </p>
                <div className="welcome-heart">
                    <h1>Welcome to RPG Life</h1>
                    <img className="heart" src={Heart}/>
                    <NavLink className="proceed link" to="/">Proceed!</NavLink>
                </div>
            </article>
        </div>
    )
}

export default Welcome;