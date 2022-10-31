// 크루들의 닉네임을 두 글자로 분리하는 기능
function splitNickname(forms) {
  const splittedName = forms
    .map((crew) => crew[1])
    .reduce((acc, nickname) => {
      for (let i = 0; i < nickname.length - 1; i++) {
        acc.push(nickname.slice(i, i + 2));
      }
      return acc;
    }, []);
  return splittedName;
}

// solution
function solution(forms) {
  const splittedName = splitNickname(forms);
  console.log(splittedName);
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
