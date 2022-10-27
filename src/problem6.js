function isNotKorean(str) {
  return !/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/.test(str);
}

function isNotNormal(infos) {
  let emailLength = infos[0].length;
  let nickLength = infos[1].length;
  let isFind = 0;
  let domain = "";

  if (emailLength <= 10 || emailLength >= 20) return true;
  for (let i = 0; i < emailLength; i++) {
    if (infos[0][i] === "@") {
      isFind = 1;
      continue;
    }

    if (isFind == 1) {
      domain += infos[0][i];
    }
  }

  if (domain !== "email.com") return true;

  if (nickLength < 2 || nickLength >= 20) return true;
  if (isNotKorean(infos[1])) return true;

  return false;
}

function problem6(forms) {
  var answer = [];

  const name = new Map();

  for (let i = 0; i < forms.length; i++) {
    if (isNotNormal(forms[i])) continue;
    let nameLength = forms[i][1].length;
    let nickname = "";
    for (let j = 0; j < nameLength - 1; j++) {
      nickname = forms[i][1][j] + forms[i][1][j + 1];
      if (name.has(nickname)) {
        name.set(nickname, name.get(nickname) + 1);
        continue;
      }
      name.set(nickname, 1);
    }
  }

  for (let i = 0; i < forms.length; i++) {
    if (isNotNormal(forms[i])) continue;
    let nameLength = forms[i][1].length;
    let nickname = "";
    let isFind = 0;
    for (let j = 0; j < nameLength - 1; j++) {
      nickname = forms[i][1][j] + forms[i][1][j + 1];
      if (name.get(nickname) > 1) {
        isFind = 1;
        break;
      }
    }

    if (isFind === 1) {
      answer.push(forms[i][0]);
    }
  }

  answer.sort();

  return answer;
}

module.exports = problem6;
