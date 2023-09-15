import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu/Menu.js';
import Slider from './components/Promocao/Slider.js';
import Login from './pages/Login/App.js';
import Destaques from './components/Destaques/destaques.js';
import Promocao from './components/Promocoes/promocao.js';
import Suplementos from './components/Suplementos/suplemento.js';
import Promo from './components/Promo/promo.js';
import Contato from './components/End/end.js';
import Cadastro from './pages/Cadastro/App.js';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Menu />
                            <Slider />
                            <Destaques />
                            <Promocao />
                            <Suplementos />
                            <Promo />
                            <Contato />
                        </>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
