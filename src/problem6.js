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

// 크루들의 닉네임 2글자씩 저장하는 기능 (map 사용)
function setMapTwoLetter(form, twoLetterMap) {}

// 크루 닉네임 중복 확인 기능
function isDuplicateNickname(form, duplicateEmailSet, twoLetterMap) {}

module.exports = problem6;
