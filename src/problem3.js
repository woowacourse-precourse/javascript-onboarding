function problem3(number) {
  const arr = Array.from(new Array(number), (_, i) => String(i + 1));

  const answer = arr.map(v => [...v]).flat(Infinity);

  const three = answer.filter(v => v === '3').length;
  const six = answer.filter(v => v === '6').length;
  const nine = answer.filter(v => v === '9').length;

  return three + six + nine;
}

module.exports = problem3;
