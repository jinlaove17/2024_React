// Common JS(CJS) 방식
// const moduleData = require("./math");

// console.log(moduleData);
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// const { add, sub } = require("./math");

// ES Module(ESM) 방식
// m -> export deafult 방식으로 불러오기
// import m, { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(m(1, 2));

import randomColor from "randomcolor";

const color = randomColor();

console.log(color);
