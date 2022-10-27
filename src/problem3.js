function problem3(number) {
  const count369 = (num) => {
    const Candidates = [3, 6, 9];
    let count = 0;
    num
      .toString()
      .split("")
      .forEach((char) => {
        if (Candidates.includes(Number(char))) count++;
      });
    return count;
  };

  var answer;
  return answer;
}

module.exports = problem3;
