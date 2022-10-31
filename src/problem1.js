function findMax(array){
  var result = [];
  for (var i=1; i<2; i++){
    var mul = 1;
    var sum = 0;
    tmp = array[i].toString();
    for (var j=0; j<tmp.length; j++){
      mul *= parseInt(tmp[j]);
      sum += parseInt(tmp[j]);
    }
    result.push(Math.max(mul, sum));
  }
  return Math.max(result);
}

function problem1(pobi, crong) {
  if (pobi[1]-pobi[0] !== 1 || crong[1]-crong[0] !== 1){
    return -1;
  }
  var maxPobi = findMax(pobi);
  var maxCrong = findMax(crong);
  if (maxPobi>maxCrong){
    answer = 1;
  }else if (maxPobi === maxCrong){
    answer = 0;
  }
  return answer;
  }

module.exports = problem1;


