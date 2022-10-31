function problem3(number) {
  let answer;

  return answer;
}

function numberArr(number) {
  let array = [];
  let newArray = '';
  for (let i = 1; i <= number; i++) {
    array.push(i.toString().split(""));
  }
  console.log(newArray.concat(array));
}

// console.log(problem3(13));
console.log(numberArr(13));

module.exports = problem3;
