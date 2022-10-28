function problem6(forms) {
  // Map(닉네임 두 글자씩 저장), Set(중복 이메일 저장) 선언
  let twoLetterMap = new Map();
  let duplicateEmailSet = new Set();

  // 순회해가며 Map에 크루들의 닉네임 두 글자씩 저장
  forms.map((form) => {
    setMapTwoLetter(form, twoLetterMap);
  });

  // 순회해가며 Map에 크루 닉네임 중복 확인
  forms.map((form) => {
    isDuplicateNickname(form, duplicateEmailSet, twoLetterMap);
  });
}

// 크루들의 닉네임 두 글자씩 저장하는 기능 (map 사용)
function setMapTwoLetter(form, twoLetterMap) {
  const [, nickname] = form;

  if (nickname.length >= 2) {
    // 크루의 닉네임 순회
    for (let i = 0; i < nickname.length - 1; i++) {
      // 크루 닉네임에서 두 글자씩 저장
      let twoLetter = nickname.slice(i, i + 2);

      // map에 현재 저장할 두글자가 이미 존재하는 경우
      if (twoLetterMap.has(twoLetter)) {
        let duplicateCount = twoLetterMap.get(twoLetter);
        twoLetterMap.set(twoLetter, duplicateCount + 1);
        continue;
      }
      // map에 현재 저장할 두글자가 존재하지 않는 경우
      twoLetterMap.set(twoLetter, 1);
    }
  }
}

// 크루 닉네임 중복 확인 기능
function isDuplicateNickname(form, duplicateEmailSet, twoLetterMap) {
  const [email, nickname] = form;
  if (nickname.length >= 2) {
    for (let i = 0; i < nickname.length - 1; i++) {
      // 크루 닉네임에서 두 글자씩 판별
      let twoLetter = nickname.slice(i, i + 2);
      if (twoLetterMap.get(twoLetter) > 1) {
        duplicateEmailSet.add(email);
        break;
      }
    }
  }
}

module.exports = problem6;
