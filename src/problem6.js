/*필요한 기능
for loop으로 forms iterate
예외 상황 처리
두번째 for loop으로 닉네임 중복 확인
중복 결과물의 이메일 array에 저장
결과물 리턴
*/

function problem6(forms) {
  var answer = solution(forms);
  return answer;
}

function solution(forms) {
  let result = [forms.length];
  let emails = [forms.length];
  let hashMap = new Map();
  for (var i=0; i<forms.length; i++) {
    var name = forms[i][1];
    //console.log("name: ", name)
    for (var j=0; j<name.length-1; j++) {
      let key = name.substring(j, j+2);
      //console.log("key: ", key)
      if(hashMap.has(key)) {
        console.log("DFSDGDGS")
        var email = hashMap.get(key);
        console.log("email: ", email)
        //console.log("forms: ", forms[i][0])
        //console.log("email: ", email)
        if(email != forms[i][0]) {
          emails.push(email);
          emails.push(forms[i][0]);
          console.log("not in emails: ", emails.unshift(forms[i][0]))
        }
      } else {
        break;
      }
      hashMap.set(key, forms[i][0]);
      //console.log("hashMap: ", hashMap.get(key, forms[i][0]))
    }
  }

  for (var i=0; i<result.length; i++) {
    for (var j=0; j<emails.length; j++) {
      //console.log("result: ", forms[i][0])
      //console.log("emails: ", forms[i][0])
      if (result[i] === emails[j]) {
        result[i] = emails[j];
      } else {
        break;
      }
    }
    console.log("result!!!!!: ", result.toString())
  }
  return result;
}

module.exports = problem6;
