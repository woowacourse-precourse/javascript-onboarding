function problem6(forms) {
  const userInfo = new Map(); //["제이엠" : email] 형식
  const nickMap = new Map(); // 2개씩 자른 문자열값의 갯수를 셀 map

  makeMaps(userInfo, nickMap, forms);
  const answer = findRepeatName(userInfo, nickMap);

  return answer;
}

function checkInputErr(email, nickName) {
  const validType = (input) => typeof input === 'string'; //TypeError
  const validlength = (input, a, b) => a <= input.length && input.length < b; // RangeError
  const validEmail = (input) => {
    const regex = /^[a-zA-Z0-9]+@email.com/;
    return regex.test(input);
  }; //email 형식체크
  const validName = (input) => {
    const regex = /^[ㄱ-ㅎ|가-힣]+$/;
    return regex.test(input);
  }; // 한글만 있는지 check

  if (!validType(email) || !validType(nickName)) return true;
  else if (!validlength(email, 11, 20) || !validlength(nickName, 1, 20)) return true;
  else if (!validEmail(email)) return true;
  else if (!validName(nickName)) return true;
  else return false;
}

function makeMaps(userInfo, nickMap, forms) {

  for (let i = 0; i < forms.length; i++) {
    const [email, nickName] = forms[i];
    if (checkInputErr(email, nickName)) continue; //만약 input값에 error 발생하면 데이터 처리하지 않음.

    userInfo.set(nickName, email);

    for (let i = 0; i < nickName.length - 1; i++) {
      const key = nickName[i] + nickName[i + 1];
      nickMap.has(key) ? nickMap.set(key, nickMap.get(key) + 1) : nickMap.set(key, 1)
    }//2개씩 자른 문자열을 nickMap에 set함.(중복 count)
  }
}

function findRepeatName(userInfo, nickMap) {

  const repeatName = [...nickMap.keys()].filter(key => nickMap.get(key) > 1); //중복된 문자열찾음.
  const userKeys = [...userInfo.keys()];
  const set = new Set();

  for (let i = 0; i < repeatName.length; i++) {
    const curRepeat = repeatName[i];
    for (let j = 0; j < userKeys.length; j++) {
      const curKey = userKeys[j];
      const curEmail = userInfo.get(curKey);
      if (set.has(curEmail)) continue;

      if (curKey.includes(curRepeat)) {
        set.add(curEmail);
      }//중복된 문자열이 nickname에 존재하면, set에 email을 넣음.
    }
  }

  return [...set].sort(); //배열로 만든 후 정렬
}

module.exports = problem6;

function test() {
  const input = [["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]];

  console.log(problem6(input)) //  ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]	["jason@email.com", "jm@email.com", "mj@email.com"]
  input[0][0] = "jm@gmail.com";
  console.log(problem6(input)) // [ 'jason@email.com', 'mj@email.com' ]
  input[1][1] = "abc";
  console.log(problem6(input)) // [] 
  input[4][1] = "이제엠워니";
  console.log(problem6(input)); // [ 'nowm@email.com', 'woniee@email.com' ]
}

