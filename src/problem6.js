function problem6(forms) {
  let emails=new Set();
  for (let i=0;i<forms.length-1;i++) {
    for (let j=i+1;j<forms.length;j++) {
      let sameWords=sameWordCheck(forms[i][1],forms[j][1])
      if (isPositionRight(sameWords,forms[j][1])) {
        emails.add(forms[i][0]);
        emails.add(forms[j][0]);
      }
    }
  }

  let answer=sortEmail(Array.from(emails))
  return answer;
};

function sameWordCheck(firstName,secondName) {
  return [...firstName].filter(word => secondName.includes(word)).join('');
};

function isPositionRight(sameWords,compareName) {
  for (let k=0;k<sameWords.length-1;k++) {
    if (compareName.includes(sameWords.substring(k, k+2))) return true;
  }
  return false
}

function sortEmail(emails) {
  return emails.sort()
}

module.exports = problem6;
