// 1.16) 객체2
// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// console.log(animal);

// 2. 메서드
// - 값이 함수인 프로퍼티
const person = {
  name: "홍길동",
  sayHi: function () {
    console.log("안녕!");
  },
  sayGoodBye: () => console.log("잘 있어.."),
  sayHello() {
    console.log("이런 것도 된단다.");
  },
  $: "x",
  _: "z",
};

person.sayHi();
person["sayHi"]();
person.sayGoodBye();
person["sayGoodBye"]();
person.sayHello();
console.log(person.$);
console.log(person._);
