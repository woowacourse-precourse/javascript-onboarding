const MAXNICKNAMELENGTH = 20;

let matchDP = [];

function getPartialMatch(N) {
  if(matchDP[N]) return matchDP[N];
  const pi = new Array(N.length).fill(0);
  let begin = 1, matched = 0;
  while(begin + matched < N.length) {
      if(N[begin + matched] === N[matched]) {
          matched++;
          pi[begin + matched - 1] = matched;
      }
      else {
          if(matched === 0) begin++;
          else {
              begin += matched - pi[matched - 1];
              matched = pi[matched - 1];
          }
      }
  }
  matchDP[N] = pi;
  return pi;
}

function kmpSearch(H, N) {
  const ret = [];
  const pi = getPartialMatch(N);
  let begin = 0, matched = 0;
  while(begin <= H.length - N.length) {
      if(matched < N.length && H[begin + matched] === N[matched]) {
          if(++matched === N.length ) ret.push(begin);
      }
      else {
          if(matched === 0) begin++;
          else {
              begin += matched - pi[matched - 1];
              matched = pi[matched - 1];
          }
      }
  }
  return ret;
}

function getPartialStrings(str){
  let ret = new Set();
  for(let i = 0; i < str.length; i++) {
    ret.add(str.substring(i));
  }
  for(let i=str.length-1; i>=1; i--) {
    ret.add(str.substring(0, i));
  }
  return ret;
}

// 0: email, 1: name
function problem6(forms) {
  let answer = new Set();
  // even if some elem is dup, that dup elem could be a part of another elem
  // forms = forms.filter((form) => form[1].length < MAXNICKNAMELENGTH);

  for (let i = 0; i < forms.length; i++) {
    const fName = forms[i][1];
    for (let j = i + 1; j < forms.length; j++) {
      const sName = forms[j][1];
      // if letter is only one, compare it rn
      if(sName.length < 2 && kmpSearch(fName, sName)){
        answer.add(forms[i][0]);
        answer.add(forms[j][0]);
        continue;
      }
      const partialStrings = getPartialStrings(sName);
      for (const partialString of partialStrings) {
        // ignore only one letter
        if(partialString.length < 2) continue;
        if (kmpSearch(fName, partialString).length > 0) {
          answer.add(forms[i][0]);
          answer.add(forms[j][0]);
        }
      }
    }
  }
  answer = [...answer].sort();
  
  return answer;
}

problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
])

module.exports = problem6;
