/***
 * 두글자 단위로 싹 파싱하여 자료구조에 저장 ObjectType {key: value [parsingNickname] : e-mail}
 * 중복되면 이메일 배열에 추
 * @param forms {Array}
 * @returns {*}
 */
function problem6(forms) {
  var answer = makeDuplicateList(forms);
  return answer;
}

function listDeduplication(result) {
  const set = new Set(result);
  return [...set];
}

function makeDuplicateList(forms) {
  const userList = makeNicknameList(forms);
  let result = [];
  for (let nickname in userList) {
    if (userList[nickname].length > 1) {
      result.push(...userList[nickname]);
    }
  }
  const emailList = sortUserList(result);
  return listDeduplication(emailList);
}

function sortUserList(userList) {
  return userList.sort();
}

function makeNicknameList(forms) {
  let userList = {};
  return forms.reduce((acc, cur) => {
    let [email, nickname] = cur;
    return (acc = userNicknameParser(acc, email, nickname));
  }, userList);
}

function userNicknameParser(userList, email, nickname) {
  for (let spellingIdx = 0; spellingIdx < nickname.length - 1; spellingIdx++) {
    const parsingNickname = nickname.substring(spellingIdx, spellingIdx + 2);
    !userList.hasOwnProperty(parsingNickname)
      ? (userList[parsingNickname] = [email])
      : userList[parsingNickname].push(email);
  }

  return userList;
}

module.exports = problem6;
