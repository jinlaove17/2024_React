// 2.12) 비동기 작업 처리하기1. 콜백함수
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;

    callback(sum);
  }, 3_000);
}

// add(1, 2, (value) => {
//   console.log(value);
// });

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "Chicken";

    callback(food);
  }, 3_000);
}

// 음식을 식히는 함수
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;

    callback(cooldownedFood);
  }, 2_000);
}

// 음식을 얼리는 함수
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;

    callback(freezedFood);
  }, 1_500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
