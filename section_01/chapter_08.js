// 1.8) 연산자2
// 1. null 병합 연산자
// - 존재하는 값을 추려내는 기능
// - null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;
let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = null ?? undefined;
let var7 = var2 ?? var3; // 둘 다 null이나 undefined가 아니라면 앞의 값 반환

// console.log(var4, var5, var6, var7);

let userName = "홍길동";
let userNickName = "Hong";
let displayName = userName ?? userNickName;

console.log(displayName);

// 2. typeof 연산자
// - 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var8 = 1;

var8 = "hello";

let t1 = typeof var8;

// console.log(t1);
t1 = typeof true;
// console.log(t1);

// 3. 삼항 연산자
// - 항을 3개 사용하는 연산자
// - 조건식을 이용하여 참, 거짓일 때의 값을 다르게 반환

// 요구사항: 변수 res에 var9의 값이 짝수면 "짝", 홀수면 "홀"을 저장
let var9 = 10;
let res = var9 % 2 == 0 ? "짝수" : "홀수";

console.log(res);
