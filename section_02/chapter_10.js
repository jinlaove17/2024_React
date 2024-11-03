// 2.10) Date 객체와 날짜
// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자

// console.log(date1); // 현재 시간 출력

let date2 = new Date("1998/09/23/10:10:10");

// console.log(date2);
date2 = new Date(1998, 9, 23, 23, 59, 59);
// console.log(date2);

// 2. 타임 스탬프
// -> 특정 시간(1970/01/01 00시 00분 00초, UTC)으로부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();

// console.log(ts1);

let date4 = new Date(ts1); // 타임 스탬프를 이용한 생성

// console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // + 1: JS는 0월을 1월로 사용
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();

// console.log(year, month, date, hour, minute, second);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(0 + 1); // 1월
date1.setDate(30);
date1.setHours(18);
date1.setMilliseconds(58);
date1.setSeconds(13);

// console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());
