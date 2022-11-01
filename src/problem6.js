// 1. forms 정보 이메일, 두글자 닉네임 확인여부 3가지의 정보를 가진 객체로 변경
// 2. 크루원들의 닉네임들 중에 곂치는 두글자 리스트화
// 3. 멤버 객체를 순회하며 중복 닉네임이 존재 하는지 확인하고
// 존재하면 answer 배열에 추가 check 를 true로 변경 (answer에 추가되면 다시 확인하지 않기 위해)
// 4. answer sorting

// 크루원 객체화
function crowToObj(forms, crewMember, crewNicknameList) {
  forms.forEach((member) => {
    const email = member[0];
    const nickname = member[1];
    const twoWordName = twoWord(nickname);

    crewNicknameList.push(...twoWordName);

    crewMember.push({
      email: email,
      twoWordName: twoWordName,
      check: false,
    });
  });
}
function problem6(forms) {
  var answer;
  let crewMember = [];
  let crewNicknameList = [];

  crowToObj(forms, crewMember, crewNicknameList);
  return answer;
}

module.exports = problem6;
