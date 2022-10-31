function problem3(number) {
  return Array.from({ length: number }, (_, i) => i + 1)
      .map(howManyHas369Numbers)
      .reduce((a, b) => a + b);
}

function howManyHas369Numbers(number) {
  const numberArr = [...(number + '')];

  return numberArr.filter(is369Number).length;
}

function is369Number(number) {
  return number === '3' || number === '6' || number === '9';
}

module.exports = problem3;
