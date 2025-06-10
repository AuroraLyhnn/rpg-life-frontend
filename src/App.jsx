import ToDo from './pages/to_do/ToDo.jsx';
import HeroQuest from './pages/hero_quest/HeroQuest.jsx';
import GuildCard from './pages/guild_card/GuildCard.jsx';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
        <main>
            <Routes>
                <Route path="/" element={<ToDo/>}/>
                <Route path="hero_quest" element={<HeroQuest/>}/>
                <Route path="guild_card" element={<GuildCard/>}/>
                {/*<Route Path="register" element={<Register/>}/>*/}
                {/*<Route path="*" element={<NotFound/>}/>*/}
            </Routes>
        </main>
    </>
  )
}

export default App;
