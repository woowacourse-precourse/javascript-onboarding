function problem4(word) {
  //Use ASCII
  //A : 65
  //Z : 90

  //a : 97
  //z : 122

  let i = 0;
  let code = 0;
  const wordArr = word.split("");

  console.log(wordArr);

  for (i = 0; i < word.length; i++) {
    if (wordArr[i] == " ") {
      continue;
    }
    code = word.charCodeAt(i);

    if (code < 91) {
      //대문자인 경우
      code = code - 64; //1~26이 남는다.
      code = 27 - code; //1~26의 값이 나온다. 26일경우 1이되고 1일경우 26이 된다.
      code = code + 64;
    } else {
      //소문자인 경우

      code = code - 96; //1~26이 남는다.
      code = 27 - code; //1~26의 값이 나온다. 26일경우 1이되고 1일경우 26이 된다.
      code = code + 96;
    }

    wordArr[i] = String.fromCharCode(code);
  }

  return wordArr.join("");
}

module.exports = problem4;
