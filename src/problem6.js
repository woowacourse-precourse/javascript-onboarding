const isCrewNumber = (forms) => {
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

    if (email.length < 11 || 19 < email.length) return false;
    if (!email.includes(domain)) return false;
    if (nickname.length < 1 || 19 < nickname.length) return false;
    if (checkKor.test(nickname)) return false;

    realCrewArray.push(element);
  })

  if (realCrewArray.length !== forms.length) return false;
  return true;
}

const duplicatedNicknameEmail = (forms) => {
  let result = [];
  let duplicatedCount = [];

  forms.forEach((form) => {
    let [email, nickname] = form;
    for (let i = 0; i < nickname.length - 1; i++) {
      let repeatCriteria = nickname.substr(i, 2);
      if (repeatCriteria in duplicatedCount) {
        duplicatedCount[repeatCriteria] += 1;
      } else {
        duplicatedCount[repeatCriteria] = 1;
      }
    }
  });

  forms.forEach((form) => {
    let [email, nickname] = form;
    for (let repeatStr in duplicatedCount) {
      if (duplicatedCount[repeatStr] > 1 && nickname.includes(repeatStr)) {
        result.push(email);
      }
    }
  });
  return result;
}

function problem6(forms) {
  let sortedDuplicatedEmail = duplicatedNicknameEmail(forms).sort();
  const uniqueEmail = new Set(sortedDuplicatedEmail);

  if (!isCrewNumber(forms)) { throw Error("1이상 10000이하의 크루 인원를 입력해주세요.") }
  if (!isCrewForm(forms)) { throw Error("이메일과 닉네임을 형식에 맞게 입력해주세요.") }
  else return [...uniqueEmail];
}

module.exports = problem6;