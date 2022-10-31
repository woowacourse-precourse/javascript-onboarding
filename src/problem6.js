// 두 글자로 분리한 닉네임과 매핑되는 크루들의 이메일을 찾는 기능
function getNicknameMap(forms) {
  const map = new Map();
  forms.forEach((crew) => {
    for (let i = 0; i < crew[1].length - 1; i++) {
      const splittedName = crew[1].slice(i, i + 2);
      map.has(splittedName)
        ? map.get(splittedName).push(crew[0])
        : map.set(splittedName, [crew[0]]);
    }
  });
  return map;
}

// 닉네임이 중복되는 크루들의 이메일을 찾는 기능
function getDuplicatedCrew(map) {
  const emails = [...map.values()].filter((email) => email.length > 1).flat();
  return emails;
}

// solution
function solution(forms) {
  const nicknameMap = getNicknameMap(forms);
  const emails = [...new Set(getDuplicatedCrew(nicknameMap))];
  const sortedEmails = emails.sort();
  return sortedEmails;
}

function problem6(forms) {
  const answer = solution(forms);
  return answer;
}

module.exports = problem6;
