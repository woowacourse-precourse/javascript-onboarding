// 닉네임 연속포함 확인 함수
function isOverLapped(nick, compareNick) {
  // 두글자씩 비교
  for (let j = 0; j < compareNick.length - 1; j++) {
    const str = compareNick[j] + compareNick[j + 1];
    if (nick.indexOf(str) > -1) return true; // 2자리 글자가 중복되었으면 true 반환.
  }
}

// 이메일 중복 제거 + 오름차순 정렬 함수
function removeOverLapAndSort(emails) {
  const set = new Set(emails);
  return [...set].sort();
}

function problem6(forms) {
  let answer = [];
  const emails = [];
  const nicknames = [];
  const filterResult = Array.from({ length: forms.length }, () => true);

  for (const [email, nick] of forms) {
    emails.push(email);
    nicknames.push(nick);
  }

  for (let i = 0; i < nicknames.length; i++) {
    const nick = nicknames[i]; // 비교 메인 닉네임
    for (let k = i + 1; k < nicknames.length; k++) {
      if (filterResult[k] === false) continue; // 비교 대상이 이미 연속포함명단에 있을경우
      const compareNick = nicknames[k]; // 비교 대상 닉네임

      // 만약 중복이 아니라면
      if (!isOverLapped(nick, compareNick)) {
        continue;
        // 중복이라면
      } else {
        // 결과 체크하고 탈출
        filterResult[i] = false;
        filterResult[k] = false;
        break;
      }
    }
  }

  // 연속포함이 된 이메일들 정리
  filterResult.forEach((v, i) => {
    if (v === false) answer.push(emails[i]);
  });

  // 신청할 수 있는 이메일 email.com 도메인 제한 처리.
  answer = answer.filter((v) => {
    return v.split("@")[1] === "email.com";
  });

  // 중복 제거
  answer = removeOverLapAndSort(answer);

  return answer;
}

module.exports = problem6;
