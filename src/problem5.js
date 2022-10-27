function problem5(money) {
  let answer;
  let array = [0, 0, 0, 0, 0, 0, 0, 0, 0] //순서대로 5만, 만, 5천, 천, 5백, 백, 5십, 십, 1

  while(money !== 0) {
    if(money >= 50000) {
      money -= 50000;
      array[0]++;
    }else if(money >= 10000) {
      money -= 10000;
      array[1]++;
    }else if(money >= 5000) {
      money -= 5000;
      array[2]++;
    }else if(money >= 1000) {
      money -= 1000;
      array[3]++;
    }else if(money >= 500) {
      money -= 500;
      array[4]++;
    }else if(money >= 100) {
      money -= 100;
      array[5]++;
    }else if(money >= 50) {
      money -= 50;
      array[6]++;
    }else if(money >= 10) {
      money -= 10;
      array[7]++;
    }else if(money >= 1) {
      money -= 1;
      array[8]++;
    }
  }

  answer = array;
  return answer;
}

module.exports = problem5;
