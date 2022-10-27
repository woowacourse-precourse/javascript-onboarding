console.log(problem1([95, 98],[197, 198]));

function problem1(pobi, crong) {
  if(validationArr(pobi) && validationArr(crong)){
    return 0;
  }
  return -1;
}

function validationArr(arr){
  return arr[1]-arr[0] == 1?true:false;
}

module.exports = problem1;