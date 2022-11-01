function problem6(forms) {
  var answer;
  let arr = forms;
  // overlap: 같은 글자가 연속적으로 포함되는 닉네임 배열
  // nickname: forms에서 nickname만 추출한 배열
  // email: 정답에 만족하는 닉네임의 email 배열
  let overlap = [];
  let nickname = [];
  let email = [];

  arr.forEach((ele, i) => {
    nickname[i] = ele[1];
  });

  nickname.forEach((ele) => {
    for (let i = 0; i < ele.length - 1; i++) {
      // 닉네임을 두글자씩 쪼갬
      const sliceValue = ele.substring(i, i + 2);

      nickname.forEach((ele2) => {
        if (ele != ele2) {
          //비교할 닉네임이 쪼갤 닉네임을 포함 할 경우
          if (ele2.includes(sliceValue)) {
            // 정답 배열에 push
            overlap.push(ele);
            overlap.push(ele2);
          }
        }
      });
    }
  });

  // 중복 제거
  const set = new Set(overlap);
  const uniqueArr = [...set];

  // email만 추출
  forms.forEach((ele) => {
    for (let i = 0; i < uniqueArr.length; i++) {
      if (ele[1] == uniqueArr[i]) {
        email.push(ele[0]);
      }
    }
  });
}

module.exports = problem6;
