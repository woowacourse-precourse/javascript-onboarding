function problem1(pobi, crong) {
  var answer;
  
  const sumfn = (num) => {
    var sum = 0;
    for (var j = 0; j < String(num).length; j++) {
      sum += parseInt(String(num)[j]);
    }
    return sum;
  } 

  const mulfn = (num) => {
    var mul = 1;
    for (var k = 0; k < String(num).length; k++) {
       mul *= parseInt(String(num)[k]);
    }
    return mul
  }

  const maxPoint = (arr) => {
    return Math.max(sumfn(arr[0]),sumfn(arr[1]), mulfn(arr[0]), mulfn(arr[1]));
  }
  
  if(pobi[1]-pobi[0] != 1 || crong[1]-crong[0] !=1) answer = -1;

  if(maxPoint(pobi) > maxPoint(crong)) answer = 1;
  else if(maxPoint(pobi) < maxPoint(crong)) answer = 2;
  else answer = 0;


  return answer;
}

module.exports = problem1;
