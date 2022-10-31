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
  console.log(emails);
}

function problem6(forms) {
  var answer;
  return answer;
}

solution([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);

module.exports = problem6;
