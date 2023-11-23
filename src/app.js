/* eslint-disable */

import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Variables

let suits = ["♦", "♠", "♥", "♣"];
let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

//Funciones

let generateRandomNumber = () => {
  let indexNumber = Math.floor(Math.random() * numbers.length);
  console.log("index Num:" + indexNumber);
  console.log(numbers[indexNumber]);
  return numbers[indexNumber];
};

let generateRandomSuit = () => {
  let indexSuit = Math.floor(Math.random() * suits.length);
  let color = indexSuit % 2 == 0 ? "card_red" : "card_black";
  console.log("index Suit:" + indexSuit);
  console.log(suits[indexSuit]);
  console.log(color);
  return [color, suits[indexSuit]];
};

window.onload = () => {
  let suit = generateRandomSuit();

  document.querySelector(".card").classList.add(suit[0]);
  document.querySelector(".number").innerHTML = generateRandomNumber();
  document.querySelector(".top-suit").innerHTML = suit[1];
  document.querySelector(".bottom-suit").innerHTML = suit[1];
};
