function isUpperCase(string) {
  return /^[A-Z]*$/.test(string);
}

function isLowerCase(string) {
  return /^[a-z]*$/.test(string);
}

function problem4(word) {
  var answer = "";
  let upperArr = [];
  let lowerArr = [];

  for (let i = 65; i <= 90; i++) {
    upperArr.push(String.fromCharCode(i));
  }

  for (let i = 97; i <= 122; i++) {
    lowerArr.push(String.fromCharCode(i));
  }

  for (let i = 0; i < word.length; i++) {
    let origin = 0;

    if (isUpperCase(word[i])) {
      origin = word[i].charCodeAt() - 65;
      answer += upperArr[25 - origin];
    } else if (isLowerCase(word[i])) {
      origin = word[i].charCodeAt() - 97;
      answer += lowerArr[25 - origin];
    } else {
      answer += word[i];
    }
  }

  return answer;
}

module.exports = problem4;
