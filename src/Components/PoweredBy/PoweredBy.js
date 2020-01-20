import React from "react";
import "./PoweredBy.css";

const PoweredBy = props => {
    const { text, name } = props;
    return (
        <div className="info-container">
            <div className="info">
                <div>
                    <span>{text}</span> <span>{name}</span>
                </div>
            </div>
        </div>
    );
};

export default PoweredBy;
