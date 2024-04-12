// Copy By Value

let numOne = 10;
let numTwo = numOne;
numOne = 20;

// console.log(numOne, numTwo);

// Copy By Reference

let objOne = {
  name: "Gunasheelan",
};

let objTwo = objOne;
objOne.name = "Reshma";

console.log(objOne);
