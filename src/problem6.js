function problem6(forms) {
  let answer = [];
  let compareArr = [];

  let strMap = new Map();

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      let str = forms[i][1].substr(j, 2);
      if (strMap.has(str)) {
        strMap.set(str, strMap.get(str) + 1);
      } else {
        strMap.set(str, 1);
      }
    }
  }

  strMap.forEach((x, y) => {
    if (x >= 2) {
      compareArr.push(y);
    }
  });

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < compareArr.length; j++) {
      if (forms[i][1].includes(compareArr[j])) {
        answer.push(forms[i][0]);
      }
    }
  }

  answer.sort((a,b) => a - b)
  // console.log(compareArr);

  // console.log(compareArr);

  //배열로 변환한 뒤 2이상인 것만 뽑아 answer에 다시 넣기
  // let lists = [...map];
  // let answer = [];

  // for (let list of lists) {
  //   if (list[1] <= 1) {
  //     continue;
  //   } else {
  //     answer.push(list[0]);
  //   }
  // }

  // let result = [];
  // //닉네임에 문자가 포함된다면 result 추가
  // for (let i = 0; i < forms.length; i++) {
  //   for (let x of answer) {
  //     if (forms[i][1].includes(x)) {
  //       result.push(forms[i][0]);
  //     }
  //   }
  // }

  // //문자열 오름차순 정렬
  // result.sort();

  // console.log(result);

  return answer;
}

module.exports = problem6;
