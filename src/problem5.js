function problem5(money) {
  if (!inputExecption(money)) return money;
  var answer;

  const changeMachine = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let changeResult = runChangeMachine(changeMachine, money);
  answer = changeResult;
  
  return answer;
}

function runChangeMachine(arr, int) {
  let result = [];
  for (i = 0; i <= arr.length - 1; i++) {
    let changeCnt = Math.floor(int / arr[i]);
    int -= (changeCnt * arr[i]);
    result.push(changeCnt);
  }
  return result;
}

function inputExecption(num) {
  let inputCheck = true;
  if (num < 1 || num > 1000000) inputCheck = false;
  if (num == null) inputCheck = false;
  return inputCheck;
}


module.exports = problem5;