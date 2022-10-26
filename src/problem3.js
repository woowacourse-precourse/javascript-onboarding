function clapping(number) {
  let count = 0;

  let str = number.toString();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "3" || str[i] === "6" || str[i] === "9") count++;
  }

  return count;
}

function problem3(number) {
  var answer;

  let cnt = 0;
  for (let i = 1; i <= number; i++) {
    cnt += clapping(i);
  }

  answer = cnt;
  return answer;
}

module.exports = problem3;
