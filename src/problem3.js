function problem3(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    for (let char of String(i)) {
      if (char == "3" || char == "6" || char == "9") count++;
    }
  }

  return count;
}

module.exports = problem3;
