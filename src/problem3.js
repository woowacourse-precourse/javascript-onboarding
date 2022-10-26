function problem3(number) {
  let answer = 0;
  if(number < 3) return 0;
  for(let i = 3; i <= number; i++) {
    let arr = (i + '').split('');
    arr.forEach(number => {
      if([3, 6, 9].includes(+number)) answer++;
    });
  }
  return answer;
}

module.exports = problem3;
