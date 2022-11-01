/*
Email-닉네임 매핑
 */
function MappingEmailNick(forms) {
  const MappingResult = new Map();
  forms.forEach((form) => {
    MappingResult.set(form[0], form[1]);
  });
  return MappingResult;
}
/*
유효한 문자열인지(길이가 2이상)
*/
function IsValid(str) {
  if (str.length >= 2) {
    return true;
  }
  return false;
}
/*
닉네임을 순차적으로 더해나감
 */
function GetNewNick(index, str, NicknameMap, AnswerMap, EmailMap) {
  let newstr = '';
  const NickNameMap = NicknameMap;
  const Email = EmailMap.get(str);
  for (let i = index; i < str.length; i++) {
    newstr += str[i];
    /*
    맵에 이미 있다면
    */
    if (NicknameMap.has(newstr)) {
      AnswerMap.add(Email);
      AnswerMap.add(NickNameMap.get(newstr));
      return false;
    }
    /*
    이미 없는 경우 닉네임을 맵에 넣어주고 리턴
    */
    if (IsValid(newstr)) {
      NickNameMap.set(newstr, Email);
    }
  }
  return NickNameMap;
}

function GetNick(Nickname, NicknameMap, AnswerMap, EmailMap) {
  let NicknameArray = [...Nickname];
  NicknameArray.forEach((Nicknamealpha, index) => {
    const result = GetNewNick(
      index,
      Nickname,
      NicknameMap,
      AnswerMap,
      EmailMap
    );
    if (result === false) {
      return false;
    }
    NicknameMap = result;
  });
}

function MappingNickEmail(forms) {
  const MappingResult = new Map();
  forms.forEach((form) => {
    MappingResult.set(form[1], form[0]);
  });
  return MappingResult;
}
function problem6(forms) {
  var answer = new Set();
  const EmailNick = MappingEmailNick(forms);
  const NickEmail = MappingNickEmail(forms);
  let Nickmap = new Map();
  forms.forEach((form) => {
    const IsNotValid = GetNick(form[1], Nickmap, answer, NickEmail);
  });
  answer = [...answer];

  return answer.sort();
}

module.exports = problem6;
