import React from "react";

const UserInput = (props) => {
    const style = {
        margin: "auto",
        boxShadow: "0 2px 3px #cccccc"
    }
    return (
        <input style={style} type="text" onChange={props.onChange} value={props.name} />
    );
}

export default UserInput;