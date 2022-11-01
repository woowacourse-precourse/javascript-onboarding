const getNumClapCount = (num) => {
  const regex = /3|6|9/g;

  return (num.toString().match(regex) || []).length;
};

const getTotalClapCount = (end) => {
  let clap = 0;

  for (let i = 1; i <= end; i++) {
    let count = getNumClapCount(i);
    clap += count;
  }

  return clap;
};

function problem3(number) {
  return getTotalClapCount(number);
}

module.exports = problem3;
