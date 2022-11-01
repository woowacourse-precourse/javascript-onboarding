function problem6(forms) {
  var answer;

  return answer;
}

const getSubStringList = (name) => {
  const result = [];
  name.split('').map((value, idx) => {
    if (idx < name.length - 1) {
      result.push(name[idx] + name[idx + 1]);
    }
  });
  return result;
};

console.log(getSubStringList('asd'));

module.exports = problem6;
