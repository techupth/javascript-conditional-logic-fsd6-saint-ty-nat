//Exercise 3
// Ternary Operator
let lightBulbStatus = "On";

//Start coding here

let lightBulbStatusCheck =
  lightBulbStatus === "On"
    ? "Light bulb is On."
    : lightBulbStatus === "Off"
    ? "Light bulb is Off."
    : "Please choose the correct input (On/Off)";

console.log(lightBulbStatusCheck);
