function problem4(word) {
  var answer = "";
  let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  const ascending = alphabetUpper.split("").concat(alphabetLower.split(""));
  const descending = alphabetUpper.split("").reverse().concat(alphabetLower.split("").reverse());
  let splitWord = word.split("");

  for (let i = 0; i < splitWord.length; i++) {
    let a = ascending.indexOf(splitWord[i]);
    splitWord[i] = descending[a];
  }

  splitWord.forEach((element) => {
    if(element === undefined) {
      element = " ";
    }
    answer = answer + element;
  });

  return answer;
}

module.exports = problem4;
