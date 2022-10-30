/**
 * 1. slice nickname to length 2
 * 2. create map of slice and set of emails
 * 3. add email to set of slice
 * 4. filter map to get slice with more than 1 email
 * 5. return sorted array of emails 
 * @param {number} forms 
 * @returns {string[]}
 */

function problem6(forms) {
  // nickSliceMap: { slice : Set(email) }
  const nickSliceMap = new Map();

  forms.forEach((form) => addFormToMap(form, nickSliceMap));
  return getEmailTargets(nickSliceMap);
}

const addFormToMap = (form, nickSliceMap) => {
  const [email, nickName] = form;

  getSlices(nickName).forEach((slice) => {
    if (!nickSliceMap.has(slice)) nickSliceMap.set(slice, new Set());
    nickSliceMap.get(slice).add(email);
  });

  return nickSliceMap;
};

// nickname slice length: 2
const getSlices = (str) => Array(str.length - 1)
  .fill()
  .map((_, i) => str[i] + str[i + 1]);

const getEmailTargets = (nickSliceMap) => {
  const emailTargets = new Set();

  nickSliceMap.forEach((emails, key) => {
    if (emails.size > 1) emails.forEach((email) => emailTargets.add(email));
  });

  return [...emailTargets].sort();
};

module.exports = problem6;
