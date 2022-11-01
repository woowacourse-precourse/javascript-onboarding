function problem6(forms) {

  if (forms.length < 1 || forms.length > 10000) return -1;

  let user = [];
  let answer = [];
  const nameRegex = /^[ㄱ-ㅎ|가-힣]+$/;
  const emailRegex = /[a-z0-9]+@email.com/;

  forms.map((form) => {
    const [useremail, username] = form;
    for (let i = 0; i < username.length - 1; i++) {
      if (username[i].length > 20) return -1;
      if (!nameRegex.test(username[i])) return -1;
      let word = username.slice(i, i + 2);
      word in user ? user[word]++ : user[word] = 1;
    }
  });

  forms.map((form) => {
    const [useremail, username] = form;
    for (let i = 0; i < username.length - 1; i++) {
      if (useremail[i].length > 11 || useremail[i].length < 20) {
        if (emailRegex.test(useremail)) {
          let word = username.slice(i, i + 2);
          if (user[word] > 1) {
            answer.push(useremail);
          }
        }
      }
    }
  });

  answer.sort();

  return answer;
}
console.log(problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]))

module.exports = problem6;
