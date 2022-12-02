import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { useState } from "react";
import zodiacData from "./assets/zodiac-data.json";
import ZodiacItem from "./components/ZodiacItem";
import DropDown from "./components/Dropdown";
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
zodiacData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */
function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [totalPlacement, setTotalPlacement] = useState(0);
  const [type, setType] = useState("All");
  const [element, setElement] = useState("All");
  const [sort, setSort] = useState("Alphabetical");

  const selectTypeFilter = eventKey => {
    setType(eventKey);
  }
  const selectElementFilter = eventKey => {
    setElement(eventKey);
  }
  const selectSortType = eventKey => {
    setSort(eventKey)
  }
  const matchesFilter = zodiac => {
    if (type === "All" && element === "All") {
      return true;
    } else if (type === "All" && zodiac.element === element) {
      return true;
    } else if (zodiac.type === type && element === "All") {
      return true;
    } else {
      return false;
    }
  }
  function handleAll(item) {
    const index = cart.indexOf(item);
    if (index == -1) {
      setCart([...cart, item]);
      setTotalPlacement(totalPlacement + item.place);
    } else {
      var array = [...cart];
      array.splice(index, 1);
      setCart(array);
      setTotalPlacement(totalPlacement - item.place);
    }
  }
  let filteredData = zodiacData.filter(matchesFilter);
  if (sort === "Alphabetical") {
    filteredData.sort();
  } else {
    filteredData.sort(function (a, b) { return a.place - b.place });
  }
  return (

    <div className="App">
      <head>
        <link rel="stylesheet" href="coolStuff.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="main.css"></link>
        <script src="https://code.jquery.com/jquery-1.12.4.min.js"
          integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ"
          crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossorigin="anonymous"></script>
      </head>
      <h1>Zodiac Stuff</h1>
      <DropDown selectTypeFilterFunction={selectTypeFilter} selectElementFilterFunction={selectElementFilter} sort={selectSortType}></DropDown>
      {filteredData.map((item) => {
        return (
          <ZodiacItem item={item} name={item.name} element={item.element} type={item.type} description={item.description} image={item.image} function={handleAll}></ZodiacItem>
        );
      })}
      <div>
        <h2>Cart</h2>
        <div>
          {cart.map((item) => (<p> {item.name} </p>))}
          <p>
            Average Placement: {cart.length === 0 ? 0 : totalPlacement / cart.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
