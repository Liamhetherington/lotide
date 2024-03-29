const head = function (arr) {
 return arr[0];
};

const assertEqual = function(actual, expected) {
 if(actual === expected) {
  return `Assertion Passed: ${actual} === ${expected}`;
 } else {
  return `Assertion Failed: ${actual} !== ${expected}`;
 }
};

console.log(assertEqual(head([]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

