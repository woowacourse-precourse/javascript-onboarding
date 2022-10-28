function problem3(number) {
  let result = 0;
  let arr = Array(number).fill().map((v, i) => i + 1).join('').split('');
  
  for(const el of arr) {
    if(el === '3' || el === '6'|| el === '9') result++;
  }
  return result;
}

module.exports = problem3;
