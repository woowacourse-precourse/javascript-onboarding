function problem6(forms) {
  var answer = [];
  let result = [];
  let obj = new Object();

  for (const [e, n] of forms) {
    obj[n] = e;
  }

  let nicknames = Object.keys(obj);

  for (let i = 0; i < nicknames.length; i++) {
    let reg = new RegExp(`[${nicknames[i]}]{2}`);
    for (let j = i; j < nicknames.length; j++) {
      if (reg.test(`${nicknames[j]}`) && nicknames[i] !== nicknames[j]) {
        // 정규 표현식으로 찾아낸 중복된 문자가 비교대상이 되었던 닉네임에 포함 되어있는지 확인 
        // -> 중복된 문자가 순서까지 일치하는지 확인하는 과정
        if (nicknames[i].includes(reg.exec(`${nicknames[j]}`)[0])) {
          result.push(nicknames[i], nicknames[j]);
        }
      }
    }
  }

  for (let k = 0; k < result.length; k++) {
    answer.push(obj[result[k]]);
  }

  // 중복 제거 & 정렬
  answer = [...new Set(answer)];
  answer.sort();

  return answer;
}

module.exports = problem6;
