import React from "react";
import './style.css';


const Menu = () => {
    return (
        <menu>
            <h1 className="name">Weather</h1>
            <h2>
                <a href="https://github.com/asadbek201001" className="about">About Us</a>
            </h2>
            <h2>
                <a href="https://onlinecompass.app/" style={{ padding: "20px" }} className="chalgish">Compass</a>
            </h2>
        </menu>
    );
};

export default Menu;
