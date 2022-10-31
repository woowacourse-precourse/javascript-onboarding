const getIncludedNumber = (number, checkNumbers) => {
  let results = 0;

  const numberArray = number.toString().split('');

  for (const element of numberArray) {
    if (checkNumbers.includes(element)) results++;
  }

  return results;
};

function problem3(number) {
  //예외사항1
  if (number < 1 || number > 10000) return 'ERROR';
  //예외사항2
  if (number % 1) return 'ERROR';

  let results = 0;

  const checkNumbers = ['3', '6', '9'];

  for (let i = 1; i <= number; i++) {
    results += getIncludedNumber(i, checkNumbers);
  }

  return results;
}

module.exports = problem3;
