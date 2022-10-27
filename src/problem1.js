function problem1(pobi, crong) {
  var answer;
  
  const sumfn = (num) => {
    var sum = 0;
    for (var j = 0; j < String(num).length; j++) {
      return sum += parseInt(String(num)[j]);
    }
  } 

  const mulfn = (num) => {
    var mul = 1;
    for (var k = 0; k < String(num).length; k++) {
      return mul *= parseInt(String(num)[k]);
    }
  }
  
  return answer;
}

module.exports = problem1;
