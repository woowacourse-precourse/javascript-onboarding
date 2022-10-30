function problem3(number) {
  if (number <= 0 || number > 10000 || number !== parseInt(number)) throw new Error('매개변수는 1이상 10,000 이하의 자연수만 입력 가능합니다.');

  let clapCount = 0;
  for (let i = 1; i < number + 1; i++) {
    const splitStr = String(i).split('');

    splitStr.forEach(elem => clapCount = elem === '3' || elem === '6' || elem === '9' ? clapCount + 1 : clapCount);
  }
  
  return clapCount;
}

module.exports = problem3;
