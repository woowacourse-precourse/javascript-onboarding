/**
 * cut the string into substrings of length 2.
 * @param {string} name given string
 * @param {string} email given email
 * @returns {[string, string][]} [string, string] array of stusbrings of length 2 and email
 */
function toSubstr(email, name) {
  let substrs = [];
  for (let i = 0; i < name.length - 1; i++) {
    substrs.push([name[i] + name[i + 1], email]);
  }
  return substrs;
}

/**
 * cut the form into substrings of length 2 ans sort the return array.
 * @param {[string, string][]} form given form
 * @returns {[string, string][]} [string, string] array of stusbrings of length 2 and email
 */
function cutStrings(forms) {
  let substrArr = [];
  forms.forEach((profile) => {
    const email = profile[0];
    const name = profile[1];
    toSubstr(email, name).forEach((e) => {
      substrArr.push(e);
    });
  });
  substrArr.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });
  return substrArr;
}

/**
 * find similar words from the sorted array.
 * @param {[string, string][]} substrArr string, string] array of stusbrings of length 2 and email
 * @returns {string[]} string array of emails that have simialr name
 */
function findSimilarNames(substrArr) {
  const length = substrArr.length;

  const emailList = [];
  for (let i = 0; i < length - 1; i++) {
    const [substr1, email1] = substrArr[i];
    const [substr2, email2] = substrArr[i + 1];
    if (substr1 === substr2) {
      emailList.push(email1);
      emailList.push(email2);
    }
  }
  return new Array(...new Set(emailList)).sort();
}

function problem6(forms) {
  var answer;

  const substrArr = cutStrings(forms);
  answer = findSimilarNames(substrArr);

  return answer;
}

module.exports = problem6;
