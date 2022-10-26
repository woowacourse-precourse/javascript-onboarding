function problem3(number) {
  const allDigits = [];
  for (let cur = 1; cur <= number; cur++) {
    const digits = Array.from(String(cur)).forEach((digit) => {
      allDigits.push(Number(digit));
    });
  }
  const result = allDigits.filter(
    (digit) => digit === 3 || digit === 6 || digit === 9
  ).length;
  return result;
}

module.exports = problem3;
