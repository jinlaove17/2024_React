// 1.13) 콜백 함수
// 1. 콜백 함수
function main(value) {
  console.log(value);
  value();
}

function sub() {
  console.log("I am sub");
}

// main(sub);
// main(() => console.log("I am sub"));

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; ++idx) {
    callback(idx);
  }
}

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; ++idx) {
//     console.log(2 * idx);
//   }
// }

repeat(5, function (idx) {
  console.log(idx);
});
// repeatDouble(5);
repeat(5, (idx) => {
  console.log(2 * idx);
});
