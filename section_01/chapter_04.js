// 1.4) 변수와 상수
// 1. 변수
let age = 27;

// console.log(age);
age = 28;
// console.log(age);

// 2. 상수
const birth = "1997.01.07";

// birth = "123"; // 수정 불가
// console.log(birth);

// 3. 변수 명명(네이밍) 규칙
// 3-1. $, _를 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
// let 1name;
let name2;
let _$name;

// 3-3. 예약어를 사용할 수 없다.
// let let;
// let if;

// 4. 변수 명명 가이드
// let a = 1;
// let b = 1;
// let c = a - b;
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
