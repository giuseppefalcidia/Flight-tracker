import React, { useState } from "react";
import "../styles/AirlineCard.css";

function AirlineCard(props) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div
            className="airlineCard"
            onMouseOver={() => {
                setShowDetails(true);
            }}
            onMouseOut={() => setShowDetails(false)}
        >
            <img
                className="airlineLogo"
                src={`https://www.kayak.com${props.airlineInfos?.logoURL}`}
                alt={props.airlineInfos?.name || ""}
            />
            <div className="airlineDetails">
                <h1 className="airlineTitle">{props.airlineInfos?.name}</h1>
                {/* phone is missing for some airlines */}
                {showDetails && props.airlineInfos?.phone && (
                    <p className="airlineDetails airlineInfosPhone">
                        {props.airlineInfos?.phone}{" "}
                    </p>
                )}
                {showDetails && (
                    <p className="airlineDetails airlineInfosSite">
                        {props.airlineInfos?.site}{" "}
                    </p>
                )}
            </div>
        </div>
    );
}

export default AirlineCard;
