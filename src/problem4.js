function problem4(word) {
  let answerArr = [];

  for(let i=0; i<word.length; i++) {
    let char = word[i];

    if (char === char.toUpperCase()) {
      answerArr.push(handleUpperCase(char));
    }

    if (char === char.toLowerCase()) {
      answerArr.push(handleSmallCase(char));
    }

    if (char === ' ') {
      answerArr.push(' ');
    }
  }

  return answerArr.join("");
}

function handleUpperCase(char) {
  const upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  return changeChar(upperArr, char);
}

function handleSmallCase(char) {
  const lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return changeChar(lowerArr, char);
}

function changeChar(arr, char) {
  const reverseArr = [...arr].reverse();
  const index = arr.indexOf(char);
  const result = reverseArr[index];
  return result;
}

module.exports = problem4;
