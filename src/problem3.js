// 3,6,9만 나오게 하고, -로 가면 안된다(자연수여야 해서) -> 정규식 사용
function problem3(number) {
  let answer = 0;

  for (let clap = 0; clap <= number; clap++) {
    let game = ("" + clap).match(/[3|6|9]/g);
    if (game !== null) {
      answer += game.length;
    }
  }
  return answer;
}

module.exports = problem3;
