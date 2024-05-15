//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here
switch (lightBulbStatus) {
    case "On":
        console.log("Light bulb is On");
        break;
    case "Off":
        console.log("Light bulb is Off");
        break;
    case "Broken":
        lightBulbStatus = "Broken";
        console.log(lightBulbStatus);
        break;
    default:
        console.log("Please choose the correct input (On/Off/Broken)");   
}