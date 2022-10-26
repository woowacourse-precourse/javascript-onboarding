function problem6(forms) {
  // 크루들에 대한 객체 생성
  let crews = forms.map((form) => (new Crew(...form)));

  // 크루들 서로서로에 대해 비교
  for (let i = 0; i < crews.length; i++) {
    for (let j = i + 1; j < crews.length; j++) {
      crews[i].compare(crews[j]);
    }
  }

  // 제한된 크루들 모으기
  const restrictedCrews = crews.filter((crew) => (crew.restricted));
  // 제한된 크루들의 이메일 받아오기
  const restrictedEmails = restrictedCrews.map((crew) => (crew.email));
  // 중복은 제거하고, 오름차순 정렬
  let results = removeRedundancy(restrictedEmails);
  results.sort();

  return results;
}

module.exports = problem6;

// 각 크루들에 대한 클래스
class Crew {
  constructor(email, nickname) {
    this.nickname = nickname;
    this.email = email;
    this.restricted = false;
  }

  // 특정 크루와 이 크루의 닉네임 비교해보기
  compare(otherCrew) {
    // 둘다 제한된 상태면 제외
    if (this.restricted && otherCrew.restricted) return;

    const otherNickname = otherCrew.nickname;
    // 두 글자씩 잘라서 비교해보기
    for (let i = 0; i < otherNickname.length - 1; i++) {
      let part = otherNickname.substring(i, i + 2);
      if (this.nickname.includes(part)) {
        this.restricted = true;
        otherCrew.restricted = true;
        return;
      }
    }
  }
}

// 배열에서 중복된 원소를 제거하여 반환하는 함수
function removeRedundancy(array) {
  let results = [];
  for (let element of array) {
    if (!results.includes(element)) results.push(element);
  }

  return results;
}