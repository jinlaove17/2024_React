// 2.2) 단락 평가
function returnFalse() {
  console.log("returnFalse()");

  return undefined;
}

function returnTrue() {
  console.log("returnTrue()");

  return 10;
}

// // 단락 평가 발생
// console.log(returnFalse() && returnTrue());
// console.log(returnTrue() || returnFalse());

// // 단락 평가 미발생
// console.log(returnTrue() && returnFalse());

// 단락 평가 활용 사례
function printName(person) {
  // Truthy && Truthy일 경우, 뒤의 값을 반환
  const name = person && person.name;

  // Truthy || Truthy일 경우, 앞의 값을 반환
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "J" });
