import React from "react";
// Compornents
import "./Header.css";

const Header = props => {
    const { title } = props;
    return (
        <div className="header-container">
            <div>
                <h1 className="header-text"> {title} </h1>
            </div>
        </div>
    );
};

export default Header;
