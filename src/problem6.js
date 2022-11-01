function problem6(forms) {
  let emailArr = [];

  //forms의 요소들을 도는 반복문
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms.length - 1; j++) {
      let [name1, name2] = [forms[i][1], forms[j][1]];
      let [email1, email2] = [forms[i][0], forms[j][0]];

      if (name1 === name2) {
        break;
      }

      if (checkOverlap(name1, name2)) {
        emailArr.push(email1);
        emailArr.push(email2);
      }
    }
  }
  let uniqueArr = deleteOverlap(emailArr);
  let sortedArr = sortByAscending(uniqueArr);
  return sortedArr;
}

// 모든 이름을 두글자 기준으로 중복 글자가 있는지 검사하는 함수
function checkOverlap(name1, name2) {
  for (let k = 0; k < name1.length - 1; k++) {
    let nameTwoChar = name1.substring(k, k + 2);
    if (name2.includes(nameTwoChar)) {
      return true;
    }
  }
  return false;
}

// 이메일의 중복을 제거하는 함수
function deleteOverlap(arr) {
  let set = new Set(arr);
  let uniqueArr = [...set];
  return uniqueArr;
}

// 이메일을 오름차순으로 정렬하는 함수
function sortByAscending(arr) {
  let sortedArr = arr.sort();
  return sortedArr;
}

module.exports = problem6;
