function problem3(number) {
  var answer = 0;
  let array = Array(number).fill().map((v, i) => i + 1).join('').split('');

  for(const elemen of array) {
    if(elemen === '3' || elemen === '6'|| elemen === '9') answer++;
  } return answer;
}

module.exports = problem3;