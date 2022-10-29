function problem2(cryptogram) {
  let answer=[];

  cryptogram.split('').map(code => {
    answer[answer.length - 1] === code ? answer.pop() : answer.push(code);
  });

  return `${answer.join('')}`;
}

module.exports = problem2;
