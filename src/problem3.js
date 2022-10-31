function problem3(number) {
  let answer = 0;
  if (number < 1 || number > 10000) return false;
  for (let i = 1; i <= number; i++) {
    let results = i.toString().match(/[3,6,9]/g);
    if (results)
      for (let j = 0; j < results.length; j++) {
        answer++;
      }
  }

  return answer;
}
module.exports = problem3;
