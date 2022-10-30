function problem1(pobi, crong) {
  var answer;
  if (checkValue(pobi) && checkValue(crong)) {
    return answer;
  }
  return -1;
}

function checkValue(arr) {
  let result =
    arr[0] % 2 == 1 && arr[1] % 2 == 0 && arr[1] - arr[0] == 1 ? true : false;
  return result;
}

// function validationArr(arr){
//   return arr[0]>400||arr[1]>400||arr[0]<1||arr[1]<1?false:arr[1]-arr[0] == 1?true:false;
// }

function sumValue(arr) {
  let sum = 0;
  do {
    sum += arr[0] % 10;
    arr[0] = Math.floor(arr[0] / 10);
  } while (arr[0] > 0);
  return sum;
}

function multValue(arr){
  let mult = 1;
  do {
    mult *= arr[0] % 10;
    arr[0] = Math.floor(arr[0] / 10);
  } while (arr[0] > 0);
  return mult;
}

function maximun([arr]){
  return Math.max(arr);
}

// console.log(problem1([99, 100], [197, 198]));


module.exports = problem1;
