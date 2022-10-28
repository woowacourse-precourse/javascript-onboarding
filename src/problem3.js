function problem3(number) {
  let count = 0;
  const RULE = [3, 6, 9];
  for (let i = 1; i <= number; i++) {
    i.toString()
      .split("")
      .map((num) => {
        if (RULE.includes(Number(num))) count++;
      });
  }
  return count;
}

module.exports = problem3;
