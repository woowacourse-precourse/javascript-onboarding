function problem3(number) {
  let answer = 0;
  const RULE = "369";

  let counter = 0;
  while (counter <= number) {
    String(counter).split("").forEach(x => {
      if (RULE.indexOf(x) > -1) {
        answer += 1;
      }
    });
    counter += 1;
  }
}

module.exports = problem3;
