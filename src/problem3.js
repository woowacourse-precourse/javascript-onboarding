function problem3(number) {
  let clap = 0;
  for (let i = 1; i <= number; i++) {
    i = String(i);
    if (i.length > 1) {
      let splitI = i.split("");
      for (e of splitI) {
        count369(e);
      }
    } else {
      count369(i);
    }
  }
  function count369(num) {
    if (num !== "0" && num % 3 === 0) {
      clap++;
    }
  }
  var answer = clap;
  return answer;
}
module.exports = problem3;
