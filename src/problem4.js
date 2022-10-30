//#1
//비슷한 문제를 예전에 풀어봐서 가볍게 풀었던것 같다
//정규표현식에 대해 알고만 있고 쓸 줄은 몰라서 검색해서 풀었는데, 공부를 좀 해야겠다..
//테스트코드를 작성할 때 변환된 표를 보고 직접 한글자 한글자 옮겨서 케이스를 만들었는데
//오히려 내가 작성한 케이스가 틀렸던게 인상깊었다. 이래서 테스트 코드를 쓰는구나 싶었다

function problem4(word) {
  let answer = "";
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const translate = {};
  for (let i = 0; i < lowerAlphabet.length; i++) {
    const key = lowerAlphabet[i];
    const value = lowerAlphabet[lowerAlphabet.length - 1 - i];
    translate[key] = value;
  }
  for (let i = 0; i < upperAlphabet.length; i++) {
    const key = upperAlphabet[i];
    const value = upperAlphabet[upperAlphabet.length - 1 - i];
    translate[key] = value;
  }

  const reg = /^[a-z]|[A-Z]$/;

  for (let s of word) {
    console.log("s 테스트", s, reg.test(s));
    if (reg.test(s)) {
      answer += translate[s];
      continue;
    }
    answer += s;
  }
  console.log(answer);
  return answer;
}

module.exports = problem4;
