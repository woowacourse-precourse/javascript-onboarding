function problem3(number) {
  let clapCount = 0;

  for (let i = 1; i <= number; i++) {
    const clapToString = String(i).split('');

    clapToString.map((char) => {
      if (char == 3 || char == 6 || char == 9) clapCount++;
    });
  }
  return clapCount;
}

module.exports = problem3;
