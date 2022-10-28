function problem5(money) {
  if (!inputExecption(money)) return money;
  var answer;
  let changeResult = [];
  const changeMachine = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  
  for (i = 0; i <= changeMachine.length - 1; i++) {
    let changeCnt = Math.floor(money / changeMachine[i]);
    money -= (changeCnt * changeMachine[i]);
    changeResult.push(changeCnt);
  }
  answer = changeResult;
  return answer;
}

function inputExecption(num) {
  let inputCheck = true;
  if (num < 1 || num > 1000000) inputCheck = false;
  if (num == null) inputCheck = false;
  return inputCheck;
}


module.exports = problem5;

console.log(problem5(232122));