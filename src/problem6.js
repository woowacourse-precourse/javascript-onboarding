function getDuplicateNickname(forms, i) {
  return [...forms[i][1]].filter((v) => forms[i + 1][1].includes(v)).join("");
}

function checkCrew(forms, crew, nickname) {
  forms.forEach((v) => {
    if (v[1].includes(nickname)) {
      crew.add(v);
    }
  });

  return crew;
}

function getEmail(crew) {
  const emailList = [];

  crew.forEach((v) => {
    emailList.push(v[0]);
  });

  return emailList.sort();
}

function problem6(forms) {
  const checkNickname = [];
  let duplicateCrew = new Set();

  for (let i = 0; i < forms.length - 1; i++) {
    const duplicateNickname = getDuplicateNickname(forms, i);

    if (duplicateNickname && !checkNickname.includes(duplicateNickname)) {
      duplicateCrew = checkCrew(forms, duplicateCrew, duplicateNickname);
    } else {
      checkNickname.push(duplicateNickname);
    }
  }

  answer = getEmail([...duplicateCrew]);

  return answer;
}

module.exports = problem6;
