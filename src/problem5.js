function problem5(money) {
  var answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  //console.log(answer);
  answer = toChanges(answer, money);
  //console.log(answer);
  return answer;
}
function toChanges(changes,money){
  let m = money;
  if(m / 50000 != 0){
     changes[0] = parseInt(m / 50000);
  }
  m %= 50000;
  if(m / 10000 != 0){
    changes[1] = parseInt(m / 10000);
  }
  m %= 10000;
  if(m / 5000 != 0){
    changes[2] = parseInt(m / 5000);
  }
  m %= 5000;
  if(m / 1000 != 0){
    changes[3] = parseInt(m / 1000);
  }
  m %= 1000;
  if(m / 500 != 0){
    changes[4] = parseInt(m / 500);
  }
  m %= 500;
  if(m / 100 != 0){
    changes[5] = parseInt(m / 100);
  }
  m %= 100;
  if(m / 50 != 0){
    changes[6] = parseInt(m / 50);
  }
  m %= 50;
  if(m / 10 != 0){
    changes[7] = parseInt(m / 10);
  }
  m %= 10;
  changes[8] = m;
  return changes;
}
/* 가장 큰 값부터 하나씩 채로 거르듯 거르면
결국 다 되는 것을 이용해 if문으로 풀었음
*/
module.exports = problem5;
