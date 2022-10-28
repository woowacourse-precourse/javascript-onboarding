function problem3(number) {
  var answer;
  return answer;
}

function howManyHas369Numbers(number) {
  const numberArr = [...(number + '')];

  return numberArr.filter(is369Number).length;
}

function is369Number(number) {
  return number === '3' || number === '6' || number === '9';
}

module.exports = problem3;
