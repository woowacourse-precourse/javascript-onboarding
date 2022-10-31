/* 문제 분석
1. 크루들의 닉네임 중, 같은 글자가 연속으로 포함될 경우 해당 닉네임 제한.
2. 먼저, 두 글자 이상이 겹치는지 검사해야 하기 때문에, 모든 2글자 이상인 케이스들을 뽑아낸다.
3. 각 케이스들과 닉네임을 비교하여, 2개 이상의 닉네임에서 겹치는지를 확인
4. 각 케이스가 포함된 닉네임의 이메일을 정답 배열에 push
5. 정답 배열을 중복 제거 처리하고, 정렬하여 리턴
 */
/* 테스트 케이스 분석
tc1. [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]
각 닉네임에서 "제이"라는 단어가 겹친다. 단어가 겹치는 닉네임들의 이메일들이 리턴된다.
["jason@email.com", "jm@email.com", "mj@email.com"]
 */

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
  let answer = getBannedUserEmail(emails, nicknames, words);

  // 정답 배열의 중복 제거
  const answer_set = new Set(answer);
  answer = [...answer_set];

  // 정답 배열을 오름차순 정렬
  answer.sort();

  return answer;
}

module.exports = problem6;
