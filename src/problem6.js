const split_words = (word) => {
  for(let i=0; i<word.length-1; i++) {
    const splitedWord = word.substr(i, i+2);
    console.log(splitedWord);
  }
}

function problem6(forms) {
  for(let i=0; i<forms.length; i++) {
    split_words(forms[i][1]);
  }
}

problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]);

module.exports = problem6;
