// 2.5) 원시타입 VS 객체타입
// 원시 타입
// -> ex: Number, String, boolean, null, undefined 등...
// -> 값 자체로써 변수에 저장되고 복사된다.
// -> 불변 값으로 메모리에 저장된 원본 데이터는 변경되지 않는다.

// 객체 타입
// -> ex: Object, Array, Function 등...
// -> 참조값을 통해 변수에 저장되고 복사된다.
// -> 메모리 값이 수정되는 가변 값이다.

// 객체 타입 주의 사항1. 의도치 않게 값이 수정될 수 있다.
let o1 = {
  name: "JJ",
};
let o2 = o1; // 얕은 복사: 객체의 참조값을 복사함(원본 객체 수정 위험 존재)

o2.name = "JK";
console.log(o1.name); // JK

o2 = { ...o1 }; // 깊은 복사: 새로운 객체를 생성하면서 프로퍼티만 따로 복사함
o2.name = "JJ";
console.log(o1.name); // JK

// 객체 타입 주의 사항2. 객체 간의 비교는 기본적으로 참조값을 기준으로 이루어진다.
let a1 = {
  name: "Hello",
};
let a2 = a1;
let a3 = { ...a1 };

// 얕은 비교: 참조값을 기준으로 비교
console.log(a1 === a2); // true
console.log(a1 === a3); // false

// 깊은 비교: 객체를 문자열로 변환하여 비교
console.log(JSON.stringify(a1) === JSON.stringify(a3)); // true // JSON.stringify: 객체를 문자열로 변환

// 객체 타입 주의 사항3. 배열과 함수도 사실 객체이다.
