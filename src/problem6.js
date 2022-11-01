function problem6(forms) {
  nicknames = getNicknames(forms);
  emails = getEmails(forms);
  duplicateSequences = getDuplicateSequences(forms, nicknames);
  
  return getInvalidNameEmails(nicknames, emails, duplicateSequences).sort();
}

function getNicknames(forms) {
  nicknames = [];

  forms.forEach(form => {
    nicknames.push(form[1].split(''));
  });
  
  return nicknames;
}

function getEmails(forms) {
  emails = [];

  forms.forEach(form => {
    emails.push(form[0]);
  });

  return emails;
}

function getDuplicateSequences(forms, nicknames) {
  var sequences = {};
  var duplicateSequences = new Set();

  nicknames.forEach(name => {
    for(var idx = 1; idx < name.length; idx ++) {
      const letter = name[idx-1];
      const nextLetter = name[idx];

      if (!(letter in sequences)) {
        sequences[letter] = [nextLetter];
        continue;
      }

      if (sequences[letter].includes(nextLetter)) {
        duplicateSequences.add(letter + nextLetter);
      }
      else {
        sequences[letter].push(nextLetter);
      }  
    }
  });

  return duplicateSequences;
}

function getInvalidNameEmails(nicknames, emails, duplicateSequences) {
  invalidNameEmails = [];

  nicknames.forEach(name => {
    for(var idx = 1; idx < name.length; idx++) {
      const sequence = name[idx-1] + name[idx];
      if (duplicateSequences.has(sequence)) {
        invalidNameEmails.push(emails[nicknames.indexOf(name)]); 
        break;
      }
    }
  });

  return invalidNameEmails;
}

module.exports = problem6;
