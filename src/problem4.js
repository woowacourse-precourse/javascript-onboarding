const [CHARCODE_A, CHARCODE_Z, CHARCODE_a, CHARCODE_z] = 'AZaz'
  .split('')
  .map((_, idx) => 'AZaz'.charCodeAt(idx));

function frogTranslate(c) {
  const charCode = c.charCodeAt(0);
  let diffFromEnd;
  let diffFromBegin;

  if (charCode >= CHARCODE_a) {
    [diffFromEnd, diffFromBegin] = [
      CHARCODE_z - charCode,
      charCode - CHARCODE_a,
    ];
  } else {
    [diffFromEnd, diffFromBegin] = [
      CHARCODE_Z - charCode,
      charCode - CHARCODE_A,
    ];
  }

  return String.fromCharCode(charCode + (diffFromEnd - diffFromBegin));
}

function problem4(word) {
  const alphabetRegex = /[a-zA-Z]/;

  let answer = word.split('').reduce((prevResult, c) => {
    if (alphabetRegex.test(c)) {
      return prevResult + frogTranslate(c);
    }

    return prevResult + c;
  }, '');

  return answer;
}

module.exports = problem4;
