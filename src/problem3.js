function problem3(number) {
  const allNumbers = Array.from({length: number}, (_,i) => i+1).join('')
  const answer = allNumbers.match(/[3|6|9]/g);
  return answer.length;
}

module.exports = problem3;