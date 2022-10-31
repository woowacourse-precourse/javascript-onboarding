function getTokens(crew) {
  const crewNickname = crew.nickname;
  const nicknameLength = crewNickname.length;
  let crewTokens = crew.tokens;

  for (let charIndex = 0; charIndex < nicknameLength - 1; ++charIndex) {
    crewTokens.push(crewNickname.substr(charIndex, 2));
  }
}

function getCrewsInfo(forms, crews) {
  const crewCount = crews.length;

  for (let crewIndex = 0; crewIndex < crewCount; ++crewIndex) {
    crews[crewIndex] = {
      email: forms[crewIndex][0],
      nickname: forms[crewIndex][1],
      tokens: []
    };
    getTokens(crews[crewIndex]);
  }
}

function problem6(forms) {
  var answer;
  let crews = new Array(forms.length);

  getCrewsInfo(forms, crews);
  return answer;
}

module.exports = problem6;
