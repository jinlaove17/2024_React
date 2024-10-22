// 1.12) 함수 표현식과 화살표 함수
// 1. 함수 표현식
// - 호이스팅의 대상이 되지 않는다.
function funcA() {
  console.log("funcA");
}

let varA = funcA;

console.log(varA);
varA();

let varB = function funcB() {
  console.log("funcB");
};

varB();
// funcB(); // Error!

varB = function () {
  console.log("이름 없는 함수");
};

varB();

// 2. 화살표 함수
let varC = () => {
  return 1;
};

varC = (value) => value + 1;
console.log(varC(10));

varC = (a, b) => {
  return a + b;
};
console.log(varC(30, 40));
