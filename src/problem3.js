const CLAP_NUMBER = [3, 6, 9];

const countClap = (number) => {
  let count = 0;
  for (let n of number.toString())
    if (CLAP_NUMBER.includes(Number(n))) count += 1;
  return count;
}

function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i += 1) {
    count += countClap(i);
  }
return count;
}

module.exports = problem3;
