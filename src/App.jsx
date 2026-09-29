import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Hobi from './Hobi';
import Kontak from './Kontak';

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path="/about" element={<About />} />
                <Route path="/hobi" element={<Hobi />} />
                <Route path="/kontak" element={<Kontak />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;