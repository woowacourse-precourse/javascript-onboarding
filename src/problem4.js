/*
<풀이>
바꾸기전과 바꿀문자를 문자를 대문자로 만들어서 하나씩 frog_dictionary의 키랑 값으로 넣어준다.
word의 문자열의 문자들을 한글자씩 for문으로 하나씩 뽑는다.
만약 뽑힌문자가 (대문자면) frog_dictionary의 키라면 frog_dictionary의 키의 값으로 message에 넣는다.
아니면(소문자면) word의 문자들을 하나씩 대문자로 만들어서 frog_dictionary의 키의 값으로 바꾸고 다시 소문자로 바꾼다.
변환된 문자열이 들어있는 message 리턴
*/

function problem4(word) {
  let frog_dictionary = {
    ' ': ' ',
    A: 'Z',
    B: 'Y',
    C: 'X',
    D: 'W',
    E: 'V',
    F: 'U',
    G: 'T',
    H: 'S',
    I: 'R',
    J: 'Q',
    K: 'P',
    L: 'O',
    M: 'N',
    N: 'M',
    O: 'L',
    P: 'K',
    Q: 'J',
    R: 'I',
    S: 'H',
    T: 'G',
    U: 'F',
    V: 'E',
    W: 'D',
    X: 'C',
    Y: 'B',
    Z: 'A',
  };

  let message = '';
  for (let i = 0; i < word.length; i++) {
    if (frog_dictionary[word[i]]) {
      message += frog_dictionary[word[i]];
    } else {
      message += frog_dictionary[word[i].toUpperCase()].toLowerCase();
    }
  }
  return message;
}

module.exports = problem4;
