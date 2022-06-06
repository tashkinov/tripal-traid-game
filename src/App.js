import {Routes, Route, useLocation} from 'react-router-dom';
import React, {useState} from 'react';
import Main from './pages/Main';
import Biography from './pages/Biography';
import Layout from "./components/Layout";
import Characters from "./pages/Characters/Characters";
import About from "./pages/About";
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import {useEffect} from "react";
import Login from './pages/Login';
import {CHARACTER} from "./constants/CharactersData";

export const CharactersState = React.createContext(null);

let initStateCheck;
if (localStorage.getItem('isLike')) {
    initStateCheck = JSON.parse(localStorage.getItem('isLike'));
} else {
    initStateCheck = [];
    for (let i = 0; i < CHARACTER.length; i++) {
        initStateCheck.push({id: CHARACTER[i].id, isLike: false})
    }
    localStorage.setItem('isLike', JSON.stringify(initStateCheck));
}

function App() {
    const [chars, setChars] = useState(initStateCheck);
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const el = document.getElementById(location.hash.slice(1));
            window.addEventListener('load', () => {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                }, {
                    once: true,
                })
            })

        } else {
            window.scrollTo(0, 0);
        }
    }, [location.hash, location.pathname])

    return (
        <CharactersState.Provider value={{chars, setChars}}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path="characters" element={<Characters/>}/>
                    <Route path="characters/:id" element={<Biography/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="*" element={<NotFound/>}></Route>
                </Route>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </CharactersState.Provider>
    )
}

export default App;