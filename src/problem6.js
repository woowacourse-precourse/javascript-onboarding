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

  if (nickLength < 1 || nickLength >= 20) return true;
  if (isNotKorean(infos[1])) return true;

  return false;
}

function problem6(forms) {
  var answer;

  const name = new Map();

  for (let i = 0; i < forms.length; i++) {
    if (isNotNormal(forms[i])) continue;
    let n = forms[1].length;
  }
  return answer;
}

module.exports = problem6;
