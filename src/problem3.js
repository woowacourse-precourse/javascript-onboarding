function problem3(number) {
  let totalClap = 0;
  for (let sequence = 1; sequence <= number; sequence++) {
    totalClap += countClap(sequence.toString());
  }
  return totalClap;
}

function countClap(sequenceToString) {
  const validNumbers = [3, 6, 9];
  let clap = 0;
  for (let i = 0; i < sequenceToString.length; i++) {
    for (let j = 0; j < validNumbers.length; j++) {
      if (parseInt(sequenceToString[i]) === validNumbers[j]) {
        clap++;
      }
    }
  }
  return clap;
}

module.exports = problem3;
