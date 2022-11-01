function getTokens(crew) {
  const crewNickname = crew.nickname;
  const nicknameLength = crewNickname.length;
  let crewTokens = crew.tokens;

  for (let charIndex = 0; charIndex < nicknameLength - 1; ++charIndex) {
    crewTokens.add(crewNickname.substring(charIndex, charIndex + 2));
  }
}

function getCrewsInfo(forms, crews) {
  const crewCount = crews.length;

  for (let crewIndex = 0; crewIndex < crewCount; ++crewIndex) {
    const [crewEmail, crewNickname] = forms[crewIndex];

    crews[crewIndex] = {
      email: crewEmail,
      nickname: crewNickname,
      tokens: new Set()
    };
    getTokens(crews[crewIndex]);
  }
}

function areDuplicates(crewTokens, otherTokens) {
  for (const token of crewTokens) {
    if (otherTokens.has(token)) {
        return true;
    }
  }
  return false;
}

function problem6(forms) {
  var answer;
  const crewCount = forms.length;
  let crews = new Array(crewCount);
  let resultSet = new Set();

  getCrewsInfo(forms, crews);
  for (let crewIndex = 0; crewIndex < crewCount - 1; ++crewIndex) {
    for (let otherCrew = crewIndex + 1; otherCrew < crewCount; ++otherCrew) {
      const crew = crews[crewIndex];
      const other = crews[otherCrew];

      if (areDuplicates(crew.tokens, other.tokens)) {
        resultSet.add(crew.email);
        resultSet.add(other.email);
      }
    }
  }
  answer = Array.from(resultSet);
	answer.sort();
  return answer;
}

module.exports = problem6;
