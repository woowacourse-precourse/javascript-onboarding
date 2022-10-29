function game(num) {
  let arr = [];
  let count = 0
  while (num !== 0) {
    arr.push(num % 10);
    num = parseInt(num / 10);
  }
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === 3) || (arr[i] === 6) || (arr[i] === 9)) {
      count += 1
    }
  }
  return count
}

function problem3(number) {
  var answer = 0;
  for (let i = 0; i <= number; i++) {
    answer += game(i)
  }
  return answer;
}

module.exports = problem3;
