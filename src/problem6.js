// 1. forms 정보 이메일, 두글자 닉네임 확인여부 3가지의 정보를 가진 객체로 변경
// 2. 크루원들의 닉네임들 중에 곂치는 두글자 리스트화
// 3. 멤버 객체를 순회하며 중복 닉네임이 존재 하는지 확인하고
// 존재하면 answer 배열에 추가 check 를 true로 변경 (answer에 추가되면 다시 확인하지 않기 위해)
// 4. answer sorting

// nickname -> two word list
function twoWord(nickname) {
  const twoWordList = [];
  for (let i = 0; i < nickname.length - 1; i++) {
    twoWordList.push(nickname[i] + nickname[i + 1]);
  }
  return twoWordList;
}
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
// 중복 닉네임 추출
function findDuplicateNick(array) {
  return [
    ...new Set(array.filter((item, index) => array.indexOf(item) !== index)),
  ];
}
function problem6(forms) {
  var answer = [];
  let crewMember = [];
  let crewNicknameList = [];

  crowToObj(forms, crewMember, crewNicknameList);
  crewNicknameList = findDuplicateNick(crewNicknameList);
  // 크루원들 중 중복 닉네임 순회
  crewNicknameList.forEach((nickname) => {
    // 해당 중복 닉네임을 가진 멤버 answer 추가
    crewMember.forEach((member) => {
      // 확인여부 체크
      if (!member["check"]) {
        const memberNick = member["twoWordName"];
        if (memberNick.indexOf(nickname) !== -1) {
          answer.push(member["email"]);
          member["check"] = true;
        }
      }
    });
  });

  return answer.sort();
}

module.exports = problem6;
