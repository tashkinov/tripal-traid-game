import {Routes, Route, useLocation} from 'react-router-dom';
import Main from './pages/Main';
import Biography from './pages/Biography';
import Layout from "./components/Layout";
import Characters from "./pages/Characters/Characters";
import About from "./pages/About";
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import {useEffect} from "react";
import Login from './pages/Login';
import CharactersContextProvider from "./components/CharactersContextProvider";

function App() {
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
        <CharactersContextProvider>
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
        </CharactersContextProvider>
    )
}

export default App;