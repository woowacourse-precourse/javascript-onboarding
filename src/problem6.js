function getDuplicatedEmails (index, target, forms) {
  let duplicatedEmails = [];
  forms.map((form, idx) => {
    const [email, nickname] = form;
    if (idx !== index && nickname.includes(target)) {
      duplicatedEmails = [...duplicatedEmails, email];
    }
  });
  return duplicatedEmails;
}

function problem6(forms) {
  const NICKNAME_INDEX = 1;
  let result = [];
  
  forms.map((form, index) => {
    const nickname = form[NICKNAME_INDEX];
    for(let i=0; i < nickname.length-1; i++) {
      const target = nickname.slice(i, i+2);
      const duplicatedEmails = getDuplicatedEmails(index, target, forms);
      result = [...result, ...duplicatedEmails]
    }
  });

  result = [...new Set(result)].sort();
  return result;
}

module.exports = problem6;
