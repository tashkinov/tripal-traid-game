import {Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import Biography from './pages/Biography';
import Layout from "./components/Layout";
import Characters from "./pages/Characters/Charactres";
import About from "./pages/About";
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="characters" element={<Characters/>} />
                <Route path="characters/:id" element={<Biography />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />}></Route>
            </Route>

        </Routes>
    )
}

export default App;