function problem6(forms) {
  var answer;
  let obj = new Object();

  for (const [e, n] of forms) {
    obj[n] = e;
  }

  console.log(obj);

  return answer;
}

module.exports = problem6;
