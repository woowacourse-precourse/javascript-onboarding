//1. 알파벳인지 판별하는 함수 생성
//2. 대소문자 판별 함수 생성
//3. input 알파벳의 인덱스 알아내어 해독하는 함수 생성 
//4. 대소문자 구별하여 해독함수 리턴값 push, 
//   알파벳 이외의 문자는 그대로 반환

const isAlphabet = (wordArrEle) => {
  const regExp = /[a-zA-Z]/g; 
  if (regExp.test(wordArrEle)) {
      return true;
  } else {
      return false;
  }
}

const isUpperCase = (wordArrEle) => {
  if (wordArrEle === wordArrEle.toUpperCase()) {
    return true;
  } else return false;
}

const decodingFuc = (wordArrEle) => { 
  const alphabetArr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

  const decodedIndex = 25 - alphabetArr.indexOf(wordArrEle.toUpperCase());

  return alphabetArr[decodedIndex];
}

function problem4(word) {
  let answer;

  const wordArr = word.split('');
  let decodedWord = [];

  for (let i = 0; i < wordArr.length; i++) {
    if (!isAlphabet(wordArr[i])) {
      decodedWord.push(wordArr[i]);
    } else if (isUpperCase(wordArr[i])) {
      //대문자면 그대로
      decodedWord.push(decodingFuc(wordArr[i]));
    } else {
      //소문자면 toLowerCase()
      decodedWord.push(decodingFuc(wordArr[i]).toLowerCase())
    }
  }

  answer = decodedWord.join('');

  return answer;
}

module.exports = problem4;
