// 1.5) 자료형
// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

let inf = Infinity;
let minInf = -Infinity;

// console.log(1 * "hello"); // NaN(Not a Number)

// 2. String Type
let myName = "홍길동";
let myLocation = "목동";
let introduce = myName + " " + myLocation;

// console.log(introduce);

// 템플릿 리터럴 문법
// console.log(`${myName}은 ${myLocation}에 거주합니다.`);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// console.log(isSwitchOn, isEmpty);

// 4. Null Type (아무 값도 없다.)
let empty = null;

// console.log(empty);

// 5. Undefined Type
let none;

console.log(none);

if (null == undefined) {
  console.log("null == undefined");
}

if (null === undefined) {
  console.log("null === undefined");
}
