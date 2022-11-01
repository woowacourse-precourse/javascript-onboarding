function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; ++i) {
    let tmp = String(i);
    for (let j = 0; j < tmp.length; ++j) {
      if (tmp[j] === "3" || tmp[j] === "6" || tmp[j] === "9") ++answer;
    }
  }

  return answer;
}

module.exports = problem3;
