import React from "react";
import whoseHouse from "./houses/whoseHouse";
import Hufflepuff from "./houses/Gryffindor";
import { colors as houseColors, gryffMascot as mascot } from "./houses/Gryffindor";

function Hogwarts() {
  whoseHouse(); // => "HAGRID'S HOUSE!"

  console.log(houseColors);

  mascot();

  return <h1>Welcome to Hogwarts!</h1>;
}

export default Hogwarts;