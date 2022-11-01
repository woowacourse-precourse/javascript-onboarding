function problem6(forms) {
  let answer;
  return answer;
}

// function splitNickname(forms) {
//   let nicknameArr = [];
//   for (let i = 0; i < forms.length; i++) {
//     nicknameArr.push(forms[i][1].split(""));
//   }
//   console.log(nicknameArr);
// }

function compareTwoWordsArr(splitNicknameArr){
  let compareArr =[];
  for(let i =0; i<splitNicknameArr.length-1; i++){
  for(let j =0; j<splitNicknameArr[i].length-1; j++){
    compareArr.push([splitNicknameArr[i][j],splitNicknameArr[i][j+1]]);
    console.log(compareArr);
  }
  
}
  // console.log(compareArr);
}

console.log(compareTwoWordsArr([
  [ '제', '이', '엠' ],
  [ '제', '이', '슨' ],
  [ '워', '니' ],
  [ '엠', '제', '이' ],
  [ '이', '제', '엠' ]
]));

// console.log(
//   splitNickname([
//     ["jm@email.com", "제이엠"],
//     ["jason@email.com", "제이슨"],
//     ["woniee@email.com", "워니"],
//     ["mj@email.com", "엠제이"],
//     ["nowm@email.com", "이제엠"],
//   ])
// );

module.exports = problem6;
