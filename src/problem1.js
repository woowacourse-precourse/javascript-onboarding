function problem1(pobi, crong) {
  var answer;
  if (checkValue(pobi)&&checkValue(crong)){

    return answer;
  }
  return -1;
}

function checkValue(arr){
  let result = arr[1]-arr[0]==1?true:false;
  return result;
}


console.log(problem1([97, 98], [197, 198]));

module.exports = problem1;
