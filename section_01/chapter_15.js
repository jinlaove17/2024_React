// 1.15) 객체1
// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj = {}; //  객체 리터럴

// 2. 객체 프로퍼티(속성)
let person = {
  name: "홍길동",
  age: 25,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
// - 존재하지 않는 프로퍼티에 접근할 경우 undefined가 반환된다.
let name = person.name;
let age = person["age"];

console.log(name);
console.log(age);

let property = "hobby";
let hobby = person[property];

console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person["favoriteFood"] = "떡볶이";

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["age"] = 28;

console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result1, result2);
