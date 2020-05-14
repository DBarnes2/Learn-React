import React from "react";

const charStyles = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
}

const CharComponent = (props) => {
    return (<div style={charStyles} onClick={props.onClick}>
        <p>{props.character}</p>
    </div>);
}

export default CharComponent;