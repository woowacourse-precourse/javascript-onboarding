console.log(problem2("browoanoommnaon"));

function problem2(cryptogram) {
  return removeDuplicatesLetters(cryptogram);
}

function removeDuplicatesLetters(word){
  let answer=[word[0]];
  for (let i = 1; i < word.length; i++) {
    let top = answer[answer.length-1];
    if (top != word[i]) {
      answer.push(word[i]);
    } else {
      answer.pop();
    }
    console.log(answer.join(""));
  }
  return answer.join("");
}

module.exports = problem2;
