const getNumClapCount = (num) => {
  const regex = /3|6|9/g;

  return (num.toString().match(regex) || []).length;
};

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
