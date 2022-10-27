function problem6(forms) {
  var answer;
  return answer;
}

function makeTwoLetterArray(forms) {
  let twoLetterArray = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 1; j < forms[i][1].length; j++) {
      const newWord = `${forms[i][1][j - 1]}${forms[i][1][j]}`;
      if (!twoLetterArray.includes(newWord)) twoLetterArray.push(newWord);
    }
  }

  return twoLetterArray;
}

module.exports = problem6;

// 입력값 : ["이메일","닉네임"] 형식의 요소들을 가진 배열

// 구현 방향성
// 1. 현재 사이클의 닉네임을 제외한 모든 닉네임을 두 글자씩 분리해 하나의 배열에 중복 없이 담는다. ex) "닉네임" -> ["닉네","네임"]
// 2. 1에서 만든 배열을 이용해 중복 문자를 가진 참가자를 구별한다. ex) "닉네임","닉네윔","닉닉닉" -> "닉네임" ,"닉네윔"
// 3. 2에서 구별한 참가자들의 이메일을 중복 없이 answer에 담는다.
// ex) [["nickname@email.com":"닉네임"],["nicknawim@email.com":"닉네윔"],["nicnicnic@email.com":"닉닉닉"]]
//     -> ["nickname@email.com","nicknawim@email.com"]

// 구현할 기능
// 모든 닉네임을 두 글자씩 분리해 중복없이 배열에 담아 리턴해주는 함수
// 중복 단어를 포함한 참가자를 구별해 해당 참가자의 이메일을 리턴해주는 함수
