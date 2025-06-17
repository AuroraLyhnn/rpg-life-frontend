import ToDo from './pages/to_do/ToDo.jsx';
import HeroQuest from './pages/hero_quest/HeroQuest.jsx';
import GuildCard from './pages/guild_card/GuildCard.jsx';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import ForgotPassword from "./pages/forgot_password/ForgotPassword.jsx";

function App() {

  return (
    <>
        <main>
            <Routes>
                <Route path="/" element={<ToDo/>}/>
                <Route path="hero_quest" element={<HeroQuest/>}/>
                <Route path="guild_card" element={<GuildCard/>}/>
                <Route path="login" element={<Login/>}/>
                <Route Path="register" element={<Register/>}/>
                <Route Path="login/forgot-password" element={<ForgotPassword/>}/>
                {/*<Route path="*" element={<NotFound/>}/>*/}
            </Routes>
        </main>
    </>
  )
}

export default App;
