/**
 * replaceUpperCaseByTreeFrogDict
 * @type {(str: string) => string}
 */
function replaceUpperCaseByTreeFrogDict(str) {
  let res = str;
  const rgx = /[A-Z]/g;
  const endsAsciiValSum = "A".charCodeAt(0) + "Z".charCodeAt(0);
  const replacer = (match) => {
    return String.fromCharCode(endsAsciiValSum - match.charCodeAt(0));
  };
  res = str.replace(rgx, replacer);
  return res;
}

/**
 * replaceLowerCaseByTreeFrogDict
 * @type {(str: string) => string}
 */
function replaceLowerCaseByTreeFrogDict(str) {
  let res = str;
  const rgx = /[a-z]/g;
  const endsAsciiValSum = "a".charCodeAt(0) + "z".charCodeAt(0);
  const replacer = (match) => {
    return String.fromCharCode(endsAsciiValSum - match.charCodeAt(0));
  };
  res = str.replace(rgx, replacer);
  return res;
}

function problem4(word) {
  const res = replaceUpperCaseByTreeFrogDict(
    replaceLowerCaseByTreeFrogDict(word)
  );

  return res;
}

module.exports = problem4;
