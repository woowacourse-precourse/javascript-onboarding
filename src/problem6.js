function problem6(forms) {
  let number = forms.length;
  if (number < 1 || number > 10000) return false;
  let answer = [];
  let arr = [];

  forms.map((form) => {
    const [email, nickname] = form;
    for (let i = 0; i < nickname.length - 1; i++) {
      const checkname = new RegExp("^[가-힣]*$");
      if (nickname.length < 1 || nickname.length > 20) return;
      if (checkname.test(nickname) == false) return;
      const check = nickname.slice(i, i + 2);
      check in arr ? arr[check]++ : (arr[check] = 1);
    }
  });
  forms.map((form) => {
    const [email, nickname] = form;
    for (let i = 0; i < email.length; i++) {
      const checkemail = new RegExp("[a-z0-9]+@email.com");
      if (email.length < 11 || email.length > 20) return;
      if (checkemail.test(email) === false) return;
    }

    for (let i = 0; i < nickname.length - 1; i++) {
      const check = nickname.slice(i, i + 2);
      if (arr[check] > 1) {
        answer.push(email);
      }
    }
  });
  answer.sort();

  return answer;
}

module.exports = problem6;