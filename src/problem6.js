/**
 * problem 6
 * @param {*} forms 
 * @returns 
 */
function problem6(forms) {
  const formsObjectArray = convertToObjectArray(forms);
  const uniqueWords = findUniqueWordsOfNickname(formsObjectArray);
  return findEmailByDuplicatedName(formsObjectArray, uniqueWords).sort();
}

/**
 * 들어온 리스트를 JavaScript Object로 변환해주는 함수
 * @param {*} forms 
 * @returns 
 */
const convertToObjectArray = (forms) => {
  const array = [];
  forms.map(element => {
    array.push({
      email: element[0],
      name: element[1]
    })
  })
  return array;
}

/**
 * 사용자들의 이름을 2글자 이상으로 잘개 쪼개어 중복이 없는 리스트로 반환해주는 함수
 * @param {*} formsObjectArray 
 * @returns 
 */
const findUniqueWordsOfNickname = (formsObjectArray) => {
  let uniqueWords = new Set();
  formsObjectArray.forEach(element => {
    const nickname = element.name;
    // 검사할 글자 갯수를 제어하기
    for (let i = 0; i < nickname.length; i++) {
      // 글자를 처음부터 끝까지 검사하기
      for (let j = 0; j < nickname.length - i; j++) {
        // 글자를 잘라보기 (for문이 돌면서 1글자, 2글자, 3글자, ... 순으로 잘리게 됨)
        const word = nickname.slice(j, j + i + 1);
        // 자른 글자의 갯수가 1 초과인 경우에만 Set 함수에 추가를 시도함
        if (word.length > 1) {
          uniqueWords.add(word);
        }
      }
    }
  });
  // Set함수를 배열로 반환
  return Array.from(uniqueWords);
}

/**
 * 단어 리스트를 중복 사용 하고 있는 사람을 찾아 이메일을 반환하는 함수
 * @param {*} formsObjectArray 
 * @param {*} uniqueWords 
 * @returns 
 */
const findEmailByDuplicatedName = (formsObjectArray, uniqueWords) => {
  let emails = new Set();
  uniqueWords.forEach((word) => {
    // 특정 단어가 포함된 이름을 찾아 객체를 배열로 만들기
    const list = formsObjectArray.filter((form) => form.name.includes(word))
    // 찾은 결과가 1보다 크다면 중복 사용 중인 사람들로 간주하고
    // emails 집합에 그사람들의 email을 추가해줌
    if (list.length > 1) {
      list.map(
        (el) => {
          emails.add(el.email)
        }
      )
    }
  })
  // 배열로 반환
  return Array.from(emails);
}

// 두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어 있는 경우 중복으로 간주한다.
// 크루는 1명 이상 10,000명 이하이다.
// 이메일은 이메일 형식에 부합하며, 전체 길이는 11자 이상 20자 미만이다.
// 신청할 수 있는 이메일은 email.com 도메인으로만 제한한다.
// 닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만이다.
// result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거한다.

module.exports = problem6;
