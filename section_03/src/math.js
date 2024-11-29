// math 모듈
function add(a, b) {
  return a + b;
}

// ES Module(ESM) 방식
export function sub(a, b) {
  return a - b;
}

export default function mul(a, b) {
  return a * b;
}

// Common JS(CJS) 방식
// module.exports = {
//   add,
//   sub,
// };

// ES Module(ESM) 방식
export { add };
