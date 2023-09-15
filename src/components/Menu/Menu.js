import React from "react";
import './menu.css';    

const Menu = () => {
    return(
        <div className="menu">
            <ul>
                <li><a href = "#">Todos os setores</a></li>
                <li><a href = "#">Básicos</a></li>
                <li><a href = "#">Hortifruti</a></li>
                <li><a href = "#">Beleza</a></li>
                <li><a href = "#">Limpeza</a></li>
                <li><a href = "#">Infantil</a></li>
                <li><a href = "#">Grãos</a></li>
                <li><a href = "#">Bebidas</a></li>
            </ul>
        </div>
    );
}

export default Menu;