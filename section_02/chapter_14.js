// 2.14) 비동기 작업 처리하기3. Async&Await
// async
// -> 함수 앞에 붙이는 키워드로, 어떤 함수를 비동기 함수로 만들어주는 키워드
// -> 함수가 프로미스를 반환하도록 변환

// async function getData() {
//   return {
//     name: "홍길동",
//     id: "hello",
//   };
// }

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "홍길동",
        id: "HelloWorld",
      });
    }, 1_500);
  });
}

// console.log(getData());

// await
// -> async 함수 내부에서만 사용이 가능한 키워드
// -> 비동기 함수가 다 처리되기를 기다리는 역할
async function printData() {
  const data = await getData();

  console.log(data);
}

printData();
