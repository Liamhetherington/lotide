const tail = function(arr) {
 let newArray = arr.shift();
 return newArray;
}

const assertEqual = function(actual, expected) {
 if(actual === expected) {
  return `Assertion Passed: ${actual} === ${expected}`;
 } else {
  return `Assertion Failed: ${actual} !== ${expected}`;
 }
};

const words = ["Lighthouse", "Labs"];
tail(words);
console.log(assertEqual(words.length, 3));

