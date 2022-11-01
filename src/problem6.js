//1. 닉네임을 인접한 2글자씩 모든 경우의 수로 분리한다.
//2. 2글자가 map에 있으면 map에 저장되어있던 
//   이메일과 현재 이메일 모두 중복Set에 추가, 아니면 현재 2글자를 map에 추가
//3. 중복Set을 array로 바꾸고 오름차순 정렬 

function problem6(forms) {
  let answer;

  const map = new Map();
  let overlapSet = new Set();

  for (let i = 0; i < forms.length; i++) {
    const [email, nickName] = forms[i];

    for (let j = 0; j < nickName.length - 1; j++) {
      const separatedNickName = nickName.substring(j, j + 2);
      
      if (map.has(separatedNickName)) {
        const savedEmail = map.get(separatedNickName);
        overlapSet.add(savedEmail);
        overlapSet.add(email);
      } else {
        map.set(separatedNickName, email);
      }
    }
  } 

  answer = Array.from(overlapSet).sort();

  return answer;
}

module.exports = problem6;
