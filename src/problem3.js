const includes369 = (number) => {
  const splitNumber = `${number}`.split('');
  return splitNumber.filter((splited) => {
    if (splited.includes(3) || splited.includes(6) || splited.includes(9))
      return splited;
  }).length;
};

function problem3(number = 0) {
  let count = 0;
  for (let i = 0; i <= number; i++) {
    count += includes369(i);
  }
  return count;
}

module.exports = problem3;
