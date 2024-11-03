// 2.9) 배열 메서드3. 배열 변형
// 5가지 배열 변형 메서드
// 1. filter
// -> 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열을 반환
let arr1 = [
  { name: "홍길동", hobby: "테니스" },
  { name: "임꺽정", hobby: "보드게임" },
  { name: "가나다", hobby: "테니스" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

console.log(tennisPeople);

// 2. map
// -> 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과 값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  //   console.log(idx, item);

  return 2 * item;
});

// console.log(mapResult1);

let names = arr1.map((item) => item.name);

// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["a", "c", "b"];

console.log(arr3);
// arr3.sort((a, b) => {
//   if (a > b) {
//     // b가 a 앞에 와라
//     return 1;
//   } else if (a < b) {
//     // a가 b 앞에 와라
//     return -1;
//   }

//   // 두 값의 자리를 바꾸지 마라
//   return 0;
// });

// 내림차순
arr3.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 와라
    return -1;
  } else if (a < b) {
    // b가 a 앞에 와라
    return 1;
  }

  // 두 값의 자리를 바꾸지 마라
  return 0;
});

console.log(arr3);

// 4. toSorted
// -> 정렬된 새로운 배열을 반환하는 메소드
let arr5 = ["c", "a", "b"];

console.log(arr5);
console.log(arr5.toSorted());

// 5. join
// -> 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메소드
let arr6 = ["hi", "im", "jongwoo"];

console.log(arr6.join(" "));
