function problem6(forms) {
  // 결과를 담을 배열 선언
  let result = [];

  // 중복되지 않은 닉네임을 담을 배열
  let nickName = [];

  // 중복되는 닉네임을 담을 배열
  let overlapNickName = [];

  // 중복여부를 확인하여 각 배열에 담기
  forms.forEach((form) => {
    for (let i = 0; i < form[1].length; i++) {
      if (nickName.includes(form[1].slice(i, i + 2)))
        overlapNickName.push(form[1].slice(i, i + 2));
      else nickName.push(form[1].slice(i, i + 2));
    }
  });

  // 중복된 닉네임을 확인하여 메일을 배열에 담기
  forms.forEach((form) => {
    for (let i = 0; i < form[1].length - 1; i++) {
      if (overlapNickName.includes(form[1].slice(i, i + 2)))
        result.push(form[0]);
    }
  });


  // 결과
  return result;
}

module.exports = problem6;