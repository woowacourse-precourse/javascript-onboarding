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
  var answer;
  return answer;
}

module.exports = problem6;
