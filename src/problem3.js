function problem3(number) {
  var answer;
  answer = count_clap(number);
  return answer;
}

function check(num) {
  let cnt = 0;
  let num_string = num.toString();
  for (let i = 0; i < num_string.length; i++) {
    if (num_string[i] === "3" || num_string[i] === "6" || num_string[i] == "9") cnt++;
  }

  return cnt;
}

function count_clap(num) {
  let cnt = 0;
  for (let i = 1; i <= num; i++) {
    if (check(i) != 0) cnt += check(i);
  }
  return cnt;
}
module.exports = problem3;
