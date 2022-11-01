const nickname = new Object();

const duplicateNicknamePushToEmailList = (emailList) => {
  for (const [nick, ema] of Object.entries(nickname)) {
    if(ema.length > 1) {
      for(let i=0; i<ema.length; i++) {
        emailList.push(ema[i]);
      }
    }
  }
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
  let emailList = [];
  for(let i=0; i<forms.length; i++) {
    split_words(forms[i][1], forms[i][0]);
  }
  duplicateNicknamePushToEmailList(emailList);
  emailList = Array.from(new Set(emailList));
  emailList.sort();
  console.log(emailList);
  return emailList;
}

module.exports = problem6;
