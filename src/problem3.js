const CLAP_NUMBER = [3, 6, 9];

const splitSingleDigit = (number) => {
  return number.toString().split("");
}

const countClap = (number) => {
  let count = 0;
  number.map((n) =>{
    if (CLAP_NUMBER.includes(Number(n))) count += 1;
  })
  return count;
}

function problem3(number) {
  let count = 0;
  for (let i = 1; i <= number; i += 1) {
    let num = splitSingleDigit(i);
    count += countClap(num);
  }
return count;
}

module.exports = problem3;
