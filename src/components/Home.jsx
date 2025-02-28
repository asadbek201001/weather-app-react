import React, { useState } from "react";
import "./style.css";
import Menu from "./Menu";
import BookContainer from "./BookContainer";
import NotesContainer from "./NotesContainer";

const API_KEY = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherApi = async (place) => {
        try {
            const API = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`;
            const response = await fetch(API);
            if (!response.ok) throw new Error(`API xatolik: ${response.status}`);

            const data = await response.json();
            setWeatherData({
                place,
                temperature: Number((data.main.temp - 273.15).toFixed(1)), 
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
            });
        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
            alert("Ma’lumotlarni olishda muammo bor!");
        }
    };

    return (
        <div className="home">
            <Menu />
            <BookContainer onSearch={fetchWeatherApi} />
            {weatherData && <NotesContainer weatherData={weatherData} onDelete={() => setWeatherData(null)} />}
        </div>
    );
};

export default Home;
