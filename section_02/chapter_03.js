// 2.3) 구조분해할당
// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr;

// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "홍길동",
  age: 27,
  hobby: "게임",
};

// 없는 원소를 할당한 경우 undefined
// myAge 변수에 할당하고 싶은 경우 age: myAge
// default 값을 할당하고 싶은 경우 extra = "hello"
let { name, age: myAge, hobby, extra = "hello" } = person;

console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
func(10);
