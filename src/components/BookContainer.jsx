import React, { useRef } from "react";
import "./style.css";

const BookContainer = ({ onSearch }) => {
    const titleInputRef = useRef(null);

    const handleSearch = () => {
        const place = titleInputRef.current.value.trim();
        if (!place) return alert("Iltimos, joy nomini kiriting!");
        onSearch(place);
        titleInputRef.current.value = "";
    };

    return (
        <div className="book-container">
            <h4 className="book-title">Enter the place</h4>
            <input ref={titleInputRef} type="text" className="input1" placeholder="Enter place..." />
            <button className="add-button" onClick={handleSearch}>Find Weather</button>
        </div>
    );
};

export default BookContainer;
