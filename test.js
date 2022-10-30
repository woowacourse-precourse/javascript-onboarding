/* getWords(nicknames:string[]):string[]
닉네임을 분리하여 나올 수 있는 모든 단어의 배열 words를 리턴.*/
function getWords(nicknames) {
  const words = [];

  for (let nickname of nicknames) {
    let nick_arr = nickname.split("");
    for (let i = 0; i < nick_arr.length - 1; i++) {
      let word = nick_arr[i] + nick_arr[i + 1];
      words.push(word);
    }
  }
  return words;
}

/* getBannedUserEmail(emails:string[], nicknames:string[], words:string[]):string[]
1. 주어진 닉네임(nicknames)과 단어(words)들을 이용하여, 닉네임을 순회한다.
2. 각 닉네임에서 몇개의 단어가 포함되어 있는지 cnt 변수에 저장.
3. 단어가 여러번 겹친다면, 닉네임의 길이보다 cnt가 커진다.
4. 따라서 cnt가 닉네임보다 길다면, 해당 닉네임의 이메일을 정답 배열에 push
5. 최종 정답 배열 answer을 리턴*/
function getBannedUserEmail(emails, nicknames, words) {
  const answer = []; // 정답 이메일 배열
  for (let nickname of nicknames) {
    let cnt = 0;
    words.forEach((word) => (nickname.includes(word) ? (cnt += 1) : null));
    if (cnt > nickname.length) {
      let index = nicknames.findIndex((el) => el === nickname);
      answer.push(emails[index]);
    }
  }
  return answer;
}

// main
function problem6(forms) {
  const emails = []; // string[] 모든 이메일 배열
  const nicknames = []; // string[] 모든 닉네임 배열

  // 입력(forms) 나누기 - 이메일과 닉네임 배열
  forms.forEach((el) => {
    emails.push(el[0]);
    nicknames.push(el[1]);
  });

  // 주어진 변수들로 정답 구하기
  const words = getWords(nicknames);
  const answer = getBannedUserEmail(emails, nicknames, words);

  return answer;
}

let forms = [
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
];
problem6(forms);
