// TODO: create a component that displays a single bakery item
import React, { Component } from 'react';
import Button from "./Button.js";

import { useState } from "react";

export default function ZodiacItem(props) {
    return (
        <div>
            <div className="ZodiacItemTitle">{props.name} </div>
            <img src={props.image}></img>
            <p class="ZodiacItemTypeAndElement">{props.type} {props.element}</p>
            <p class="ZodiacItemDescription">{props.description}</p>
            <Button item={props.item} function={props.function}></Button>
        </div>
    )

}