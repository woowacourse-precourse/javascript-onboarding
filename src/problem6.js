function problem6(forms) {
  if (forms.length < 1 || forms.length > 10000) return 'Please check the data';

  const duplicated = [];

  forms.forEach((target, targetIndex) => {
    const [targetEmail, targetNickName] = target;
    if (isValid(targetEmail, targetNickName)) {
      for (let i = targetIndex + 1; i < forms.length; i++) {
        for (let j = 0; j < targetNickName.length - 1; j++) {
          if (forms[i][1].search(targetNickName.substr(j, 2)) !== -1) {
            duplicated.push(targetEmail, forms[i][0]);
            break;
          }
        }
      }
    }
  });

  const result = [...new Set(duplicated)].sort();
  return result;
}

function isValid(targetEmail, targetNickName) {
  const valPattern_nickName_number = /^[가-힣]{1,19}$/;
  const valPattern_email = /^[a-zA-Z0-9]{1,9}(?=\@email\.com)/;

  if (
    valPattern_nickName_number.test(targetNickName) &&
    valPattern_email.test(targetEmail)
  ) {
    return true;
  } else {
    console.log('Please check your information');
    return false;
  }
}

module.exports = problem6;
