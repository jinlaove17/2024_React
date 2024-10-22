// 1.11) 함수
// 함수 선언
function greeting() {
  console.log("안녕하세요.");
}

// console.log("호출 전");
// greeting();
// console.log("호출 후");

// 호이스팅
// - 끌어 올리다.
// - 변수나 함수를 실행부의 최상단으로 올리는 것
let area4 = getArea(50, 30);

console.log(area4);

function getArea(width, height) {
  function another() {
    console.log("another");
  }

  let area = width * height;

  another();

  return area;
}

let area1 = getArea(10, 20);
let area2 = getArea(30, 20);
let area3 = getArea(120, 200);

console.log(area1);
console.log(area2);
console.log(area3);
