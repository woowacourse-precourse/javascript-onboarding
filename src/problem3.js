function problem3(number) {
  const allDigits = [];
  for (let cur = 1; cur <= number; cur++) {
    const digits = Array.from(String(cur)).forEach((digit) => {
      allDigits.push(Number(digit));
    });
  }
}

module.exports = problem3;
