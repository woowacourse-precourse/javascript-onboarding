function problem6(forms) {
  // 모든 크루들의 닉네임의 두글자씩 딴 배열을 만든다.
  const splittedCrewsNickName = forms.map((form) => {
    const crewNickName = form[1].split("");
    const arr = [];
    for (let i = 0; i < crewNickName.length - 1; i++) {
      arr.push(crewNickName[i] + crewNickName[i + 1]);
    }
    return arr;
  });
  // 두 글자씩 딴 배열에서 중복된 값을 추려낸다.
  // 중복된 값을 닉네임으로 포함하고 있는 크루들을 찾아 이메일을 한 배열에 넣는다.
  // 배열을 리턴한다.
}

module.exports = problem6;
