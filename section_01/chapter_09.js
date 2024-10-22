// 1.9) 조건문
// 1. if 조건문
let num = 4;

if (num >= 10) {
  //   console.log("num은 10이상입니다.");
} else if (num >= 5) {
  //   console.log("num은 5이상입니다.");
} else {
  //   console.log("num은 5미만입니다.");
}

// 2. switch 조건문
// - if문과 기능 자체는 동일
// - 다수의 조건을 처리할 때 if보다 더 직관적이다.
let animal = "cat";

switch (animal) {
  case "cat":
    console.log("고양이");
    break;
  case "dog":
    console.log("강아지");
    break;
  case "bear":
    console.log("곰");
    break;
  case "snake":
    console.log("뱀");
    break;
  case "tiger":
    console.log("호랑이");
    break;
  default:
    console.log("일치하는 동물이 없습니다.");
}
