const isBiggerThanMoney = (money, monetaryUnits, answer) => {
  let sumOfUnits = 0;
  const unitsLength = monetaryUnits.length;
  
  for(let i=0; i<unitsLength; i++) {
    sumOfUnits += monetaryUnits[i] * answer[i]
  }
  return sumOfUnits>money;
}

const withdraw = (money, monetaryUnits, answer) => {
  let unitIdx = 0;
  const unitsLength = monetaryUnits.length;

  while(unitIdx < unitsLength) {
    answer[unitIdx] += 1;
    const biggerResult = isBiggerThanMoney(money, monetaryUnits, answer);
    answer[unitIdx] -= biggerResult;
    unitIdx += biggerResult;
  }
}

const makeMonetaryUnits = () => {
  const arr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  return arr;
}

const makeArr = () => {
  let arr = new Array();
  for(let i=0; i<9; i++) arr[i]=0;
  return arr;
}

function problem5(money) {
  let answer = makeArr();
  const monetaryUnits = makeMonetaryUnits();
  withdraw(money, monetaryUnits, answer);
  return answer;
}

module.exports = problem5;