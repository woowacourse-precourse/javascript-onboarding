function problem3(number) {
  let answer=0;
  for (let i=1;i<=number;i++) {
    answer+=(i.toString().match(/[369]/g) || []).length;
  };
  return answer;
};

module.exports = problem3;
