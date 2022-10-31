function problem3(number) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    number_arr = String(i).split("");

    const divison_arr = number_arr.map((x) => Number(x) > 0 && Number(x) % 3);

    const clap = divison_arr.filter((x) => x === 0).length;
    answer += clap;
  }
  return answer;
}
module.exports = problem3;
