// TODO: create a component that displays a single bakery item
import React, { Component } from 'react';
import { useState } from "react";

export default function Button(props) {
    const [buttonText, setButtonText] = useState("Add To Team");
    function changeButton() {
        if (buttonText === "Add To Team") {
            setButtonText("Remove From Team");
        } else {
            setButtonText("Add To Team");
        }

    }
    return (
        <div>
            <button onClick={() => { changeButton(); props.function(props.item) }}> {buttonText} </button>
        </div>
    )

}