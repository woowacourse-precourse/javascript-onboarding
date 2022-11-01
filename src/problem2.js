function problem2(cryptogram) {
     
  let splited = cryptogram.split("");
  let noDup = [];

  for (let el of splited) {
    el === noDup[noDup.length - 1] ? noDup.pop() : noDup.push(el);
  }

  const answer = noDup.join("");
  return answer;
}

module.exports = problem2;
