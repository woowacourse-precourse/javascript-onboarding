function problem6(forms) {
  var answer;
  return answer;
}
const crews = [];
const emails = [];
const peopleToChange = [];
function devidePeople(forms) {
  for (i = 0; i < forms.length; i++) {
    crews.push(forms[i][1]);
    emails.push(forms[i][0]);
  }
  for(let j = 0; j < crews.length; j++) {
    for(let i = j+1; i < crews.length; i++) {
      switch(true) {
        case crews[j].substr(0,2) === crews[i].substr(0,2):
          peopleToChange.push(emails[j]);
          peopleToChange.push(emails[i]);

        case crews[j].substr(0,2) === crews[i].substr(1,2):
          peopleToChange.push(emails[j]);
          peopleToChange.push(emails[i]);        
        
        case crews[j].substr(1,2) === crews[i].substr(0,2):
          peopleToChange.push(emails[j]);
          peopleToChange.push(emails[i]);

        case crews[j].substr(1,2) === crews[i].substr(1,2):
          peopleToChange.push(emails[j]);
          peopleToChange.push(emails[i]);
          
        case crews[j].substr(0,crews[j].length) === crews[i].substr(0,crews[i].length):
          peopleToChange.push(emails[j]);
          peopleToChange.push(emails[i]);
        break;
      }
    }
  }
}
module.exports = problem6;
