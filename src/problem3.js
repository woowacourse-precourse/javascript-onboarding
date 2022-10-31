function problem3(number) {
  let answer = 0;
  const checkNumber = ['3', '6', '9'];
  for (let i = 1; i <= number; i++) {
    const iArray = i.toString().split('');
    for (const el of iArray) {
      if (checkNumber.includes(el)) answer++;
    }
  }
  return answer;
}

module.exports = problem3;
