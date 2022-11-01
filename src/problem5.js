//money는 정수
//money는 1이상 1,000,000이하

//돈의 액수가 5만, 만, 오천, 천, 500, 100 ,50, 10, 1
//몇개로 변환되는 지 배열에 담아 리턴

function except(money = 0) {
  if (Number.isInteger(money) != true) {
    console.log('not integer');
    return -1;
  }
  if (1 > money || 1000000 < money) {
    console.log('돈의 액수가 너무 적거나 많다');
    return -1;
  }
  return 0;
}

function changeMoney(money, give) {
  return [parseInt(money / give), money % give];
}

function action(money = 0) {
  let arr = new Array(9).fill(0);
  let change = money;
  let give = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let i = 0; i < give.length; i++) {
    [arr[i], change] = changeMoney(change, give[i]);
    console.log(change);
  }

  return arr;
}

function problem5(money = 0) {
  var answer;

  let e = except(money);
  if (e == -1) {
    return -1;
  }

  answer = action(money);
  console.log(answer);
  return answer;
}


module.exports = problem5;
