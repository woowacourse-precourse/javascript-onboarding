// **기능 요구 사항**
// 1. 1에서 number 까지의 수를 구한다.
// 2. 1에서 구한 수들 중에 3,6,9의 숫자를 카운트한다.

function problem3(number) {
  let last_number = number;
  let array = [];
  let count = 0;

  for (let i = 1; i < last_number+1; i++) {
    i = String(i)
    array.push(...i.split(''))
    console.log(array)
  }


}

module.exports = problem3;

problem3(12)