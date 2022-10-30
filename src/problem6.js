function problem6(forms) {
  var answer;
  const crewCount = forms.length;
  let nicknames = new Array(crewCount);

  for (let crewIndex = 0; crewIndex < crewCount; ++crewIndex) {
    const nickname = forms[crewIndex][1];
    const nicknameLength = nickname.length;

    nicknames[crewIndex] = [];
    for (let charIndex = 0; charIndex < nicknameLength - 1; ++charIndex) {
      nicknames[crewIndex].push(nickname.substr(charIndex, 2));
    }
  }
  return answer;
}

module.exports = problem6;
