function problem3(number) {
  let numberOf369 = "";
  for (i = 0; i <= number; i++) {
    let matchNumberOf369 = i.toString().match(/[369]+/g);
    matchNumberOf369 && (numberOf369 += String(matchNumberOf369));
  }
  return numberOf369.length;
}

module.exports = problem3;
