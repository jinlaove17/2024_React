// 1.14) 스코프
// 스코프
// - 전역(전체 영역) 스코프, 지역(특정 영역) 스코프
// - 전역 스코프: 전체 영역에서 접근 가능
// - 지역 스코프: 특저 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2;

  console.log(a);
  funcB();

  function funcB() {
    console.log(b);
  }
}

funcA();
// console.log(b); // Error!

if (true) {
  let c = 1;
}

// console.log(c); // Error!

if (true) {
  var d = 10;
}

console.log(d);
