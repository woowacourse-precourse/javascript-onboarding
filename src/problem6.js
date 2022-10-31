function problem6(forms) {
  let answer = [];
  const checkList = new Array(forms.length).fill(false);

  forms.forEach((member, idx) => {
    const nickname = member[1];
    for (let i = 0; i < nickname.length - 1; i++) {
      const sliceNick = nickname[i] + nickname[i + 1];
      for (let j = idx + 1; j < forms.length; j++) {
        const compareNick = forms[j][1];
        if (compareNick.indexOf(sliceNick) !== -1) {
          checkList[i] = true;
          checkList[j] = true;
        }
      }
    }
  });

  checkList.forEach((check, idx) => {
    if (check) answer.push(forms[idx][0]);
  });
  return answer.sort();
}

module.exports = problem6;

// 기능 구현
// 1. 입력받은 forms의 길이만큼 배열 생성 (중복체크 용도)
// 2. 반복문을 돌며 닉네임을 두 글자씩 쪼개가며 indexOf메서드를 사용해 중복여부 판단
// 3. 중복 발견 시 현재 인덱스와 중복되는 인덱스를 통해 중복체크 배열에 표시
// 4. 중복체크 배열을 통해 이메일을 정렬하여 리턴
