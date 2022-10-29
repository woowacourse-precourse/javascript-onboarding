function problem3(number) {
  let str = 0;
  for (let i = 1; i <= number; i++) {
    str += String(i);
  }

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if ((str[i] === "3") | (str[i] === "6") | (str[i] === "9")) {
      count++;
    }
  }
  return count;
}

module.exports = problem3;
