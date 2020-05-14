import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Name: {props.username}</p>
            <p>Nice to meet you!</p>
        </div>
    );
}

export default UserOutput;