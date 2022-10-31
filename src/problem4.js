function problem4(word) {
  let answer;

  if (typeof word === 'string') {
    let wordArray = [...word];

    for (i = 0; i < wordArray.length; i++) {
      if (wordArray[i] !== ' ') {
        let asciiCode = wordArray[i].charCodeAt(0);

        if (asciiCode >= 65 && asciiCode <= 90)
          wordArray[i] = String.fromCharCode(155 - asciiCode);
        else wordArray[i] = String.fromCharCode(219 - asciiCode);
      }
    }
    answer = wordArray.join('');
  }

  return answer;
}

module.exports = problem4;
