// // 1.17) 배열
// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴(대부분 사용)
let arrC = [1, true, "Hello", undefined, null, () => {}, {}, []];

// 2. 배열 요소 접근
// - 인덱스는 0번부터 시작
let item1 = arrC[0];
let item2 = arrC[1];

console.log(item1, item2);
arrC[0] = "hello";
console.log(arrC);
