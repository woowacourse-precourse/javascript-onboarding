function problem3(number) {
  let count = 0;
  for (let i = 1; i < number + 1; i++) {
    let num = i.toString();

    for (let j = 0; j < num.length; j++) {
      if (num[j].includes("3")) {
        count += 1;
      }
      if (num[j].includes("6")) {
        count += 1;
      }
      if (num[j].includes("9")) {
        count += 1;
      }
    }
  }
  return count;
}
module.exports = problem3;
