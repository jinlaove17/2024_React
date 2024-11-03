// 2.13) 비동기 작업 처리하기2. Promise
// Promise
// -> 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체
// -> 비동기 작업을 감싸는 객체이다.

// Promise의 기능
// -> 비동기 작업 실행
// -> 비동기 작업 상태 관리
// -> 비동기 작업 결과 저장
// -> 비동기 작업 병렬 실행
// -> 비동기 작업 다시 실행
// -> ...

// Promisze의 3가지 상태
// -> 대기(Pending): 아직 작업이 완료되지 않은 상태
// -> 성공(Fulfilled): 비동기 작업이 성공적으로 마무리 된 상태
// -> 실패(Rejected): 비동기 작업이 실패한 상태
//
// -> 해결(Resolve): 대기 -> 성공
// -> 거부(Reject): 대기 -> 실패
// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업을 실행하는 함수
//   // executor
//   setTimeout(() => {
//     const num = 10;

//     if (typeof num === "number") {
//       resolve("이곳은 PromiseResult를 넣는다.");
//     } else {
//       reject("이곳에는 실패한 이유를 넣는다.");
//     }
//   }, 2_000);
// });

// console.log(promise);

// then 메서드
// -> Promise의 비동기 작업이 성공했을 경우 호출 됨
// promise.then((value) => {
//   console.log(value); // PromiseResult
// });

// -> Promise의 비동기 작업이 실패했을 경우 호출 됨
// promise.catch((error) => {
//   console.log(error);
// });

// Promise 체이닝
// -> then과 catch는 자신을 호출한 promise를 그대로 반환한다.
// -> 따라서 아래와 같이 사용이 가능하다.
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수
    // executor
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2_000);
  });

  return promise;
}

const promise = add10(5);

promise
  .then((value) => {
    console.log(value);

    const newPromise = add10(value);

    // 아무것도 반환하지 않았다면 원본 프로미스 객체를 반환하지만,
    // 아래와 같이 새로운 프로미스를 반환하면 then 메소드의 결과 값이 된다.
    return newPromise;
  })
  .then((value) => {
    console.log(value);

    return add10(value);
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
