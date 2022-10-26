function problem3(number) {
  var answer;
  return answer;
}

function count369(num) {
  return (num + '').split('').reduce((acc, cur) => {
    if (cur === '3' || cur === '6' || cur === '9') acc++;
    return acc;
  }, 0);
}

module.exports = problem3;
