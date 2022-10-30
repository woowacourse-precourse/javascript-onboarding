/**
 * cut the string into substrings of length 2
 * @param {string} name given string
 * @param {string} email given email
 * @returns {[string, string][]} [string, string] array of stusbrings of length 2 and email
 */
function toSubstr(email, name) {
  substrArray = [];
  for (let i = 0; i < name.length() - 1; i++) {
    substrArr.push([name[i] + name[i + 1], email]);
  }
  return substrArr;
}

/**
 * cut the form into substrings of length 2
 * @param {[string, string][]} form given form
 * @returns {[string, string][]} [string, string] array of stusbrings of length 2 and email
 */
function cutStrings(forms) {
  let substrArr = [];
  forms.foreach((profile) => {
    const email = profile[0];
    const name = profile[1];
    toSubstr(email, name).foreach((e) => {
      substrArr.push(e);
    });
  });
  return substrArr;
}

function problem6(forms) {
  var answer;

  const substrArr = cutStrings(forms);

  return answer;
}

module.exports = problem6;
