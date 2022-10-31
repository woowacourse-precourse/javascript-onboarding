function problem4(word) {
  const firstUpperCase = 'A'.charCodeAt(0);
  const lastUpperCase = 'Z'.charCodeAt(0);
  const firstLowerCase = 'a'.charCodeAt(0);
  const lastLowerCase = 'z'.charCodeAt(0);
  const upperCaseSum = firstUpperCase + lastUpperCase;
  const lowerCaseSum = firstLowerCase + lastLowerCase;

  const codeNumberList = Array.from(word).map((character) => character.charCodeAt(0));
  const reverseList = codeNumberList.reduce((acc, number) => {
    if (number === ' '.charCodeAt(0)) {
      return [...acc, ' '];
    } else {
      const isUpperCase = number < lastUpperCase;
      const opposite = isUpperCase ? upperCaseSum - number : lowerCaseSum - number;
      return [...acc, String.fromCharCode(opposite)];
    }
  }, []);

  return reverseList.join('');
}

module.exports = problem4;
