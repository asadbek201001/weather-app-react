import React from "react";
import "./style.css";

const NotesContainer = ({ weatherData, onDelete }) => {
    if (!weatherData) return null;

    return (
        <div className="notes-container">
            <div className="note-container">
                <h1 className="weather-place">Weather: {weatherData.place}</h1>
                <h1 className="temperature">{weatherData.temperature}°C</h1>
                <h1 className="humidity">Humidity: {weatherData.humidity}%</h1>
                <h1 className="wind-speed">Wind speed: {weatherData.windSpeed} m/s</h1>
                <button className="delete-button" onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
};

export default NotesContainer;
