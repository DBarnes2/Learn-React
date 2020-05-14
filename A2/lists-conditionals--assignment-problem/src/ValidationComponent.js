import React from "react";

const ValidationComponent = (props) => {
    if (props.inputLength >= 5) {
        return <p>Text long enough</p>
    } else {
        return <p>Text too short</p>
    }
}

export default ValidationComponent;