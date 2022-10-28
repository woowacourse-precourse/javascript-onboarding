function problem4(word) {
  
  let result;
  wordArr = word.split("");

  //청개구리 엄마의 말을 사전을 참고해 반대로 변환하는 기능
  const conversion = (str) => {
    let asciiNum = str.charCodeAt(0);
    
    if (asciiNum > 64 && asciiNum < 91) {
      return String.fromCodePoint(155 - asciiNum);
    }
    if (asciiNum > 96 && asciiNum < 123) {
      return String.fromCodePoint(219 - asciiNum);
    }

    return String.fromCodePoint(asciiNum);
  }

  return result;
}

problem4("I love you")
// module.exports = problem4;
