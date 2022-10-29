function problem6(forms) {
  var answer = solution(forms);
  return answer;
};
function solution(forms) {
  let answer = [];
  let memberList = {};
  forms.map((form) => {
    let [_, nickName] = form;
    for(let i = 0; i < nickName.length -1; i++) {
      let overlap = nickName.substring(i, i + 2);
      if(overlap in memberList) memberList[overlap] += 1;
      else memberList[overlap] = 1;
    }
  });
  forms.map((form) => {
  let [email, nickName] = form;
  for(let i = 0; i < nickName.length -1; i++) {
    let overlap = nickName.substring(i, i + 2);
    if(memberList[overlap] > 1) answer.push(email);
  }
  });
  return answer.sort();
};
module.exports = problem6;