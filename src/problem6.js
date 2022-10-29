const nickname = new Object();

const pushToNickname = (splitedWord, email) => {
  nickname[splitedWord] = [email];
  console.log(nickname);
}

const split_words = (word, email) => {
  for(let i=0; i<word.length-1; i++) {
    const splitedWord = word.substr(i, i+2);
    console.log(splitedWord);
    pushToNickname(splitedWord, email);
  }
}

function problem6(forms) {
  for(let i=0; i<forms.length; i++) {
    split_words(forms[i][1], forms[i][0]);
  }
}

problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]);

module.exports = problem6;
