const isLimitNickname = new Map();

function sliceNickname(forms){
  forms.forEach((student) => {
    const [email, nickname] = student;
    for(let i =0;  i< nickname.length-1;i++) {
      const tempStr = nickname.substring(i,i+2);
      if(isLimitNickname.has(tempStr)) isLimitNickname.set(tempStr, isLimitNickname.get(tempStr)+1);
      else isLimitNickname.set(tempStr, 1);
    }
  });
}

function checkSameNickName(answer,forms) {
  forms.forEach((student) => {
    const [email, nickname] = student;
    for(let i =0;  i< nickname.length-1 ;i++) {
      const tempStr = nickname.substring(i,i+2);
      if(isLimitNickname.get(tempStr) > 1) answer.push(email);
    }
  });
}

function problem6(forms) {
  var answer = [];
  sliceNickname(forms);
  checkSameNickName(answer,forms);
  answer = [...new Set(answer.sort())];
  return answer;
}
module.exports = problem6;
