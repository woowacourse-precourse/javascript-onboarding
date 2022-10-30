const checkCrewNumber = (forms) => {
  if (forms.length < 1 || 10000 < forms.length) return false;
  return true;
}

const isCrewForm = (forms) => {
  let realCrewArray = [];
  forms.filter((element) => {
    let email = element[0];
    let nickname = element[1];
    let domain = "@email.com"
    let checkKor = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;

    if (email.length < 11 || 20 < email.length) return false;
    if (!email.includes(domain)) return false;
    if (nickname.length < 1 || 20 < nickname.length) return false;
    if (checkKor.test(nickname)) return false;

    realCrewArray.push(element);
  })

  if (realCrewArray.length !== forms.length) return false;
  return true;
}

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
