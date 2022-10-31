function problem3(number) {
  numToArr(number);

  var answer;
  return answer;
}

function numToArr(num){
  let numArr = new Array;
  for (let i = 1; i < num + 1; i++){
    numArr.push(i);
  }
  console.log(numArr);
}

module.exports = problem3;

problem3(13);