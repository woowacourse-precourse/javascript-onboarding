//예외사항
//1<= number <= 10000
//number은 정수

function except(number = 0) {
  if (Number.isInteger(number) != true) {
    return -1;
  }
  if (1 > number || 10000 < number) {
    return -1;
  }
  return 0;
}

function action(number = 0) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    let n = i;
    for (let j = 0; j < ('' + i).length; j++) {
      if (n % 10 == 3 || n % 10 == 6 || n % 10 == 9) {
        count++;
      }
      n = parseInt(n / 10);
    }
  }

  return count;
}

function problem3(number = 0) {
  var answer;

  let e = except(number);
  if (e == -1) {
    return -1;
  }

  answer = action(number);

  return answer;
}


module.exports = problem3;

