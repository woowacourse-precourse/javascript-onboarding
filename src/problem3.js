function problem3(number) {
  var answer;
  let clap = 0;
  num = [];
  // 1~number까지의 수 문자화
  for (let i = 1; i < number + 1; i++) {
    num.push(`${i}`);
  }
  // 3, 6, 9가 들어가면 해당 (문자인)수가 나뉘게 됨
  // "3".split("3")의 경우 ['','']로 나타남
  // 따라서 값이 1보다 크다면 3, 6, 9 중 하나가 포함되어 있는 것
  for (n of num) {
    clap +=
      n.split("3").length - 1 ||
      n.split("6").length - 1 ||
      n.split("9").length - 1;
  }
  answer = clap;
  return answer;
}

module.exports = problem3;
