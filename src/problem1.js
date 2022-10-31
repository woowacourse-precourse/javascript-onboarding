function plusSum(num){
  var sum = 0;
  while(num){
    sum += num % 10;
    sum /= 10;
  }
  return sum;
}

function multiSum(num){
  var sum = 1;
  while(num){
    sum *= num % 10;
    sum /= 10;
  }
  return sum;
}

function pageCheck(page){
  const [left, right] = page;
  if(left % 2 == 1 && 1 <= left && left <= 399 && right % 2 == 0 && 2 <= right && right <= 400)
    return 1;
  else
    return 0;
}

function problem1(pobi, crong) {
  var answer; 


  return answer;
}

module.exports = problem1;
