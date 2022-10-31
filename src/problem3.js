function problem3(number) {
  let count = 0;
  const regex = /[369]/g;
  for (let i=1;i<=number;i++) {
    let res = [...i.toString().matchAll(regex)];
    count += res.length;
  }
  return count;
}

module.exports = problem3;
