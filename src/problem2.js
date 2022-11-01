function problem2(cryptogram) {
  let answer = cryptogram;
  let isOverlap = false;
  while (!isOverlap) {
    let overlapIndex = [];
    for (i = 0; i < answer.length; i++) {
      if (answer[i] === answer[i + 1]) overlapIndex.push(i);
      else if (answer[i] === answer[i - 1]) overlapIndex.push(i);
    }
    if (overlapIndex.length === 0) {
      break;
    }
    let count = -1;
    let changedLetter = "";
    for (let x of answer) {
      count++;
      if (!overlapIndex.includes(count)) changedLetter += x;
    }
    answer = changedLetter;
  }
  return answer;
}

module.exports = problem2;
