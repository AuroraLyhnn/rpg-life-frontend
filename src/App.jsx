import './App.css';
import { Route, Routes } from 'react-router-dom';

import ToDo from './pages/to_do/ToDo.jsx';
import HeroQuest from './pages/hero_quest/HeroQuest.jsx';
import GuildCard from './pages/guild_card/GuildCard.jsx';
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import ForgotPassword from "./pages/forgot_password/ForgotPassword.jsx";
import NotFound from "./pages/not_found/NotFound.jsx";
import Welcome from "./components/journal/popups/welcome/Welcome.jsx";
import NewHeroQuest from "./pages/new_hero_quest/NewHeroQuest.jsx";

function App() {

  return (
    <>
        <main>
            <Routes>
                <Route path="/" element={<ToDo/>}/>
                <Route path="hero_quest" element={<HeroQuest/>}/>
                <Route path="new_hero_quest" element={<NewHeroQuest/>}/>
                <Route path="guild_card" element={<GuildCard/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="login_forgot_password" element={<ForgotPassword/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </main>
    </>
  )
}

export default App;
