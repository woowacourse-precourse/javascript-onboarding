function problem6(forms) {
  let nicknameAnswer = [];
  let answer = [];

  // deque처럼 동작할 nickname 배열
  let nickname = [];

  // 닉네임만 담기
  for (form of forms) {
    nickname.push(form[1]);
  }
  console.log(nickname); // [ '제이엠', '제이슨', '워니', '엠제이', '이제엠' ]

  

  
  return answer;
}

forms = [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"], ]
problem6(forms);


// module.exports = problem6;