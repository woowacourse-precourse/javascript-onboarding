let nickOverlapList = new Set();

let nickArray = [];
for (let i = 0; i < forms.length; i++) {
  nickArray.push(forms[i][1]);
}

function problem6(forms) {
  for (crew of forms) {
    let crewEmail = crew[0];
    let crewNickName = crew[1];
    nicknameValid(crewNickName);
    function nicknameValid(koreanNickname) {
      if (emailValid(crewEmail) && checkKoreanOnly(crewNickName)) {
        let splitKoreanNick = koreanNickname.split("");
        for (let i = 0; i < splitKoreanNick.length - 1; i++) {
          for (eachNick of nickArray) {
            if (
              eachNick !== koreanNickname &&
              eachNick.includes(splitKoreanNick[i])
            ) {
              let splitEachNick = eachNick.split("");

              let firstOverlap = splitEachNick.indexOf(`${splitKoreanNick[i]}`);
              if (splitEachNick[firstOverlap + 1] === splitKoreanNick[i + 1]) {
                nickOverlapList.add(crewEmail);
              }
            }
          }
        }
      }
    }
  }
  let result = [...nickOverlapList];
  var answer = result.sort();
  return answer;
}

function emailValid(email) {
  if (11 <= email.length < 20 && email.includes("@email.com")) {
    let splitEmail = email.split("@email.com");
    if (splitEmail[0].length > 1 && splitEmail[1] == "") {
      return true;
    }
  } else {
    result.push(email);
  }
}
function checkKoreanOnly(koreanChar) {
  if (koreanChar == null) return false;
  for (let i = 0; i < koreanChar.length; i++) {
    let c = koreanChar.charCodeAt(i);
    if (!((0xac00 <= c && c <= 0xd7a3) || (0x3131 <= c && c <= 0x318e))) {
      return false;
    }
  }
  return true;
}

module.exports = problem6;
