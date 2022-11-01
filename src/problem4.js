//아스키 코드를 활용하기로 함

const bigCode = 'A'.charCodeAt(0) + 'Z'.charCodeAt(0);
const smallCode = 'a'.charCodeAt(0) + 'z'.charCodeAt(0);

//대소문자 판별
const bigReg = /[A-Z]/g;
const smallReg = /[a-z]/g;

//예외사항
//word는 문자열
//word.length은 1~1000
//알파벳 이외의 문자는 변환x
//대문자는 대문자 소문자는 소문자로 변환
function except(word = '') {
  if (typeof word != 'string') {
    console.log('not string');
    return -1;
  }
  if (1 > word.length || 1000 < word.length) {
    console.log('length가 1미만 1000초과');
    return -1;
  }
  return 0;
}

function action(word = '') {
  let frogWord = '';

  for (let i = 0; i < word.length; i++) {
    //소문자 조건
    let char = '';
    if (word[i].match(smallReg) != null) {
      let code = smallCode - word[i].charCodeAt(0);
      char = String.fromCharCode(code);
    } //대문자조건
    else if (word[i].match(bigReg) != null) {
      let code = bigCode - word[i].charCodeAt(0);
      char = String.fromCharCode(code);
    } //그외
    else {
      char = word[i];
    }

    frogWord += char;
  }

  return frogWord;
}

function problem4(word = '') {
  var answer;

  let e = except(word);
  if (e == -1) {
    return -1;
  }

  answer = action(word);
  console.log(answer);
  return answer;
}

module.exports = problem4;
