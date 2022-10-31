function problem3(number) {
  let answer;

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

function findNumber(arr, findNum) {
  return arr.filter((element) => findNum === element).length;
}

console.log(problem3(33));

module.exports = problem3;
