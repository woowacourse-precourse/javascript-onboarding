const checkOverLapped = (crewOne, crewTwo) => {
  const crewOneNickName = crewOne[1];
  const crewTwoNickName = crewTwo[1];

  for (let i = 0; i < crewOneNickName.length; i++) {
    for (let j = 0; j < crewTwoNickName.length; j++) {
      if (crewOneNickName[i] === crewTwoNickName[j]) {
        if (
          crewOneNickName[i + 1] &&
          crewOneNickName[i + 1] === crewTwoNickName[j + 1]
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

const checkRightForm = (forms) => {
  const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  for (const form of forms) {
    const [email, nickname] = form;
    let isKorean = true;
    //예외사항2
    if (email.length < 11 || email.length >= 20) return false;
    //예외사항3
    if (email.split('@')[1] !== 'email.com') return false;
    //예외사항4
    if (nickname.length < 1 || nickname.length >= 20) return false;
    //예외사항5
    nickname.split('').forEach((element) => {
      if (!korean.test(element)) isKorean = false;
    });
    if (!isKorean) return false;
  }
  return true;
};

function problem6(forms) {
  //예외사항1
  if (forms.length < 1 || forms.length > 1000) return 'ERROR';
  //예외사항 나머지 종합
  if (!checkRightForm(forms)) return 'ERROR';

  const results = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = i + 1; j < forms.length; j++) {
      if (checkOverLapped(forms[i], forms[j])) {
        results.push(forms[i][0], forms[j][0]);
      }
    }
  }

  const settedResultArray = Array.of(...new Set(results));

  return settedResultArray.sort();
}

module.exports = problem6;
