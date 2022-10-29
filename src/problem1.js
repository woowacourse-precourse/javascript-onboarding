function problem1(pobi, crong) {
  var answer;
  if (checkValue(pobi)&&checkValue(crong)){

    return answer;
  }
  return -1;
}

function checkValue(arr){
  let result = arr[0]%2==1&&arr[1]%2==0&&arr[1]-arr[0]==1?true:false;
  return result;
}


console.log(problem1([99, 100], [197, 198]));

module.exports = problem1;
