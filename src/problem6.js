function problem6(forms) {
  //입력: 각 개인정보가 담긴 배열["이메일","닉네임"]을 요소로 갖는 2차원 배열
  //출력: 닉네임 변경이 필요한 교육생의 이메일을 담은 1차원 배열
  //해야할 일:
  //1. 두글자 이상 중복되는 닉네임들을 찾고, (닉네임 => forms[i][1])
  //2. 해당하는 닉네임의 이메일을 배열에 담고, (이메일 => forms[i][0])
  //3. 중복은 제거하고, 오름차순으로 리턴.
  let emailArr = cutByTwoLetters(forms);
  let filteredEmail = emailArr.filter((arr) => arr.length >= 2);
  let flatArr = filteredEmail.flat();
  let set = new Set(flatArr);
  let answer = [...set];
  return answer.sort();
}

function cutByTwoLetters(forms) {
  let emailArr = [];
  let nameObj = {};
  forms.map((form) => {
    let [email, name] = form;
    for (let i = 0; i < name.length - 1; i++) {
      let twoLetters = name.substring(i, i + 2);
      if (twoLetters in nameObj) {
        nameObj[twoLetters].count += 1;
        nameObj[twoLetters].name = [...nameObj[twoLetters].name, name];
        nameObj[twoLetters].email = [...nameObj[twoLetters].email, email];
      } else {
        nameObj[twoLetters] = { name: [name], email: [email], count: 1 };
      }
      emailArr.push(nameObj[twoLetters].email);
    }
  });
  return emailArr;
}

module.exports = problem6;
