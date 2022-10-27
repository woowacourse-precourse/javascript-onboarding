function problem5(money) {
  var answer = checking(money);
  return answer;
}
function checking(money){
  let arr = [50000,10000,5000,1000,500,100,50,10,1];
  let result = []
  for(let i = 0; i<arr.length;i++){
    result.push(Math.floor(money/arr[i]));
    money = money%arr[i];
  }
  return result;
}
module.exports = problem5;
