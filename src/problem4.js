function problem4(word) {
  let result = "";
  const smallAscii = "a".charCodeAt(0) + "z".charCodeAt(0);
  const bigAscii = "A".charCodeAt(0) + "Z".charCodeAt(0);
  const isAlpha = /[a-zA-Z]/;

  for (let element of word) {

    if (isAlpha.test(element)) {
      if (element.charCodeAt(0) <= "Z".charCodeAt(0)) {
        result += String.fromCharCode(bigAscii - element.charCodeAt(0))
      } else {
        result += String.fromCharCode(smallAscii - element.charCodeAt(0))
      }
    } else {
      result += element
    }

  }

  return result;
}

module.exports = problem4;
