// 2.8) 배열 메서드2. 순회와 탐색
// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// -> 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(2 * item);
});

// console.log(doubledArr);

// 2. includes
// -> 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isIncluded = arr2.includes(3);

// console.log(isIncluded);

// 3. indexOf
// -> 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// -> 얕은 비교로 이루어지기 때문에 객체는 찾을 수 없다.
let arr3 = [1, 2, 2];
let idx = arr3.indexOf(2);

// console.log(idx);

// 4. findIndex
// -> 모든 요소를 순회하면서 콜백함수를 만족하는
//    특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr4 = [1, 2, 3];

const findedIndex = arr4.findIndex((item) => item % 2 !== 0);

// console.log(findedIndex);

// 5. find
// -> 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 그대로 반환
let arr5 = [{ name: "전종우" }, { name: "홍길동" }];
const finded = arr5.find((item) => item.name === "전종우");

console.log(finded);
