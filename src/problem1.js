function problem1(pobi, crong) {
  if (checkValue(pobi) && checkValue(crong)) {
    let maximumPobi = maximum([
      leftSumValue(pobi),
      rightSumValue(pobi),
      leftMultValue(pobi),
      rightMultValue(pobi),
    ]);
    let maximumCrong = maximum([
      leftSumValue(crong),
      rightSumValue(crong),
      leftMultValue(crong),
      rightMultValue(crong),
    ]);

    return Math.max(maximumPobi, maximumCrong);
  }
  return -1;
}

function checkValue(arr) {
  let result =
    arr[0] % 2 === 1 && arr[1] % 2 === 0 && arr[1] - arr[0] === 1 ? true : false;
  return result;
}

// function validationArr(arr){
//   return arr[0]>400||arr[1]>400||arr[0]<1||arr[1]<1?false:arr[1]-arr[0] == 1?true:false;
// }

function leftSumValue(arr) {
  let sum = 0;
  arr[0] = arr[0].toString();
  for (let i = 0; i < arr[0].length; i++) {
    sum += parseInt(arr[0][i]);
  }
  return sum;
}

function rightSumValue(arr) {
  let sum = 0;
  arr[1] = arr[1].toString();
  for (let i = 0; i < arr[1].length; i++) {
    sum += parseInt(arr[1][i]);
  }
  return sum;
}

function leftMultValue(arr) {
  let mult = 1;
  do {
    mult *= arr[0] % 10;
    arr[0] = Math.floor(arr[0] / 10);
  } while (arr[0] > 0);
  return mult;
}

function rightMultValue(arr) {
  let mult = 1;
  do {
    mult *= arr[1] % 10;
    arr[1] = Math.floor(arr[1] / 10);
  } while (arr[1] > 0);
  return mult;
}

function maximum(arr) {
  return Math.max(...arr);
}

console.log(problem1([187, 188], [197, 198]));

module.exports = problem1;
