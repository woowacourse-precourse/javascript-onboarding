
var pobi = [235,236];
var crong = [325,326]

function problem1(pobi, crong) {
  var answer;
  return answer;
}

function numberSum(a) {
  var answer = 0;
  var sumNumber = String(a);

  for(var i=0; i<sumNumber.length; i++){
    answer +=parseInt(sumNumber[i]);
  }
  
  return answer;

}


console.log (numberSum(pobi[0]));

module.exports = problem1;
