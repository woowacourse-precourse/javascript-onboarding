function problem3(number) {
  let answer;

  let arr = numberArr(number);

  return answer;
}

function numberArr(number) {
  let array = [];
  let newArray = "";
  for (let i = 1; i <= number; i++) {
    array.push(i.toString().split(""));
  }
  return newArray.concat(array).split(",");
}

console.log(problem3(13));


module.exports = problem3;
