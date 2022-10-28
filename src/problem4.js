function problem4(word) {
  let answer='';
  for (let alphabet of word) {
    let asciiCode=alphabet.charCodeAt(0)
    if (65<=asciiCode && asciiCode<=90) answer+=String.fromCharCode(90-(asciiCode-65));
    else if (97<=asciiCode && asciiCode<=122) answer+=String.fromCharCode(122-(asciiCode-97));
    else answer+=alphabet;
  };
  return answer;
}

module.exports = problem4;
