/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domains = [".com", ".net", ".us", ".io", ".etc"];

let combinations = [];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let d of domains) {
        combinations.push(`${p} ${a} ${n}${d}`);
      }
    }
  }
}

for (let i = 0; i < combinations.length; i++) {
  console.log(combinations[i]);
}
