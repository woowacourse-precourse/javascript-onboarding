function problem3(number) {
  var answer;

  const CLAP_NUMBERS = ['3', '6', '9'];
  let clapCount = 0;

  for (let i = 1; i <= number; i++) {
    const stringNumber = String(i);
    for (let j = 0; j < stringNumber.length; j++) {
      if (CLAP_NUMBERS.includes(stringNumber.charAt(j))) clapCount++;
    }
  }

  answer = clapCount;
  return answer;
}

module.exports = problem3;
