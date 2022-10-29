function problem4(word) {
  let string = '';

  for (let i = 0; i < word.length; i += 1) {
    let char = word.charAt(i);

    const isAlphabet = checkAlphabet(char);
    if (isAlphabet) {
      char = reverseAlphabet(char);
    }

    string += char;
  }

  return string;
}

function checkAlphabet(char) {
  const regexp = new RegExp(/[a-zA-Z]/);
  return regexp.test(char);
}

function reverseAlphabet(char) {
  const isLowerCase = char === char.toLowerCase();
  const start = isLowerCase ? 'a'.charCodeAt() : 'A'.charCodeAt();
  const end = isLowerCase ? 'z'.charCodeAt() : 'Z'.charCodeAt();
  const reverseCharCode = start + end - char.charCodeAt();

  return String.fromCharCode(reverseCharCode);
}

module.exports = problem4;
