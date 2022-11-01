function problem6(forms) {
  //예외처리
  const isWrong = (email, nickname) => {
    const regex = /^[ㄱ-ㅎ|가-힣]+$/;
    //기능목록 3-1, 3-2 , 3-3 구현
    return (
      !regex.test(nickname) ||
      nickname.length < 1 ||
      nickname.length >= 20 ||
      email.length < 11 ||
      email.length > 20 ||
      email.match(/@email.com/) === null
    );
  };

  //기능목록 3-4 구현
  if (forms.length < 1 || forms.length > 10000) {
    throw '크루 수가 허용 범위를 벗어났습니다';
  }
  //연산
  //기능목록 1-1 구현
  let twoCharList = new Map();
  forms.forEach((v, idx) => {
    let [email, nickname] = forms[idx];
    if (isWrong(email, nickname)) return;
    for (let i = 0; i < v[1].length - 1; i++) {
      const twoChar = v[1].substring(i, i + 2);
      if (twoCharList.has(twoChar)) {
        twoCharList.set(twoChar, twoCharList.get(twoChar) + 1);
      } else {
        twoCharList.set(twoChar, 1);
      }
    }
  });

  for (let [key, value] of twoCharList) {
    if (value <= 1) {
      twoCharList.delete(key);
    }
  }
  //출력값 구하기
  let result = new Set();
  forms.forEach((_, idx) => {
    let [email, nickname] = forms[idx];
    if (isWrong(email, nickname)) return;
    //기능목록 1-2 구현
    for (let [key] of twoCharList) {
      if (nickname.includes(key)) {
        result.add(email);
      }
    }
  });
  //기능목록 2-1 구현
  let answer = [];
  answer.push(...result);
  answer.sort();

  return answer;
}
module.exports = problem6;
