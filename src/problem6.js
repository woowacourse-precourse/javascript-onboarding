/*
[x] 단어를 포개서 자르는 기능을 구현한다.
[ ] 중복된 닉네임을 사용하는 유저를 찾는 기능을 구현한다.
[ ] 중복된 닉네임을 사용하는 유저들을 반환한다.
*/

function overlapWord(word) {
  const slicedWords = [];
  for (let index = 0; index < word.length - 1; index += 1) {
    const slicedWord = word.slice(index, index + 2);
    slicedWords.push(slicedWord);
  }
  return slicedWords;
}

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
