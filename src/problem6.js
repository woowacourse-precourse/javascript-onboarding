const nickname = new Object();

const duplicateNicknamePushToEmailList = (emailList) => {
  for (const [nick, ema] of Object.entries(nickname)) {
    if(ema.length > 1) {
      for(let i=0; i<ema.length; i++) {
        emailList.push(ema[i]);
      }
    }
  }
  console.log(emailList);
}

const pushToNickname = (splitedWord, email) => {
  if(nickname[splitedWord] === undefined)
    nickname[splitedWord] = [email];
  else 
    nickname[splitedWord].push(email);
}

const split_words = (word, email) => {
  for(let i=0; i<word.length-1; i++) {
    const splitedWord = word.substr(i, i+2);
    pushToNickname(splitedWord, email);
  }
}

function problem6(forms) {
  const emailList = [];
  for(let i=0; i<forms.length; i++) {
    split_words(forms[i][1], forms[i][0]);
  }
  duplicateNicknamePushToEmailList(emailList);
}

problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]);

module.exports = problem6;
