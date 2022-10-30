const checkCrewNumber = (forms) => {
  if (forms.length < 1 || 10000 < forms.length) return false;
  return true;
}

const isCrewForm = (forms) => {
  let realCrewArray = [];
  forms.filter((element) => {
    let email = element[0];
    let domain = "@email.com"

    if (email.length < 11 || 20 < email.length) return false;
    if (!email.includes(domain)) return false;

    realCrewArray.push(element);
  })

  if (realCrewArray.length !== forms.length) return false;
  return true;
}

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
