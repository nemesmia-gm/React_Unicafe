import React from "react";

const Notification = ({message, color}) => {
    const styleRed = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    };
    const styleGreen = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    };

    if(message === null)
    {
        return null
    }
    return (
        <div style={ color === 'green'? styleGreen: styleRed}>{message}</div>
    )
};

export default Notification
