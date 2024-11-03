// 2.7) 배열 메서드1. 요소 조작
// 6가지 요소 조작 메서드
// 1. push
// -> 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];

// arr1.push(4);
// console.log(arr1);
// arr1.push(5, 6, 7);
// console.log(arr1);
// console.log(arr1.length);

// 2. pop
// -> 배열에 맨 뒤에 있는 요소를 제거하고 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// console.log(poppedItem);
// console.log(arr2);

// 3. shift
// -> 배열의 맨 앞에 있는 요소를 제거하고 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// console.log(shiftedItem);
// console.log(arr3);

// 4. unshift
// -> 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const arr4Len = arr4.unshift(0); // 배열의 길이를 반환함

// console.log(arr4Len, arr4);

// 5. slice
// -> 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // [start, end)
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-3);

// console.log(sliced, sliced2, sliced3);
// console.log(arr5); // 원본 배열을 그대로 유지

// 6. concat
// -> 2개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);

// console.log(concatedArr);
