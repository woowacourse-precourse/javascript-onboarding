function problem5(money) {
  let answer = [];
  let fiftyK = Math.floor(money / 50000);
  let tenK = Math.floor((money - fiftyK * 50000) / 10000);
  let fiveK = Math.floor((money - (fiftyK * 50000 + tenK * 10000)) / 5000);
  let oneK = Math.floor(
    (money - (fiftyK * 50000 + tenK * 10000 + fiveK * 5000)) / 1000
  );
  let fiveH = Math.floor(
    (money - (fiftyK * 50000 + tenK * 10000 + fiveK * 5000 + oneK * 1000)) / 500
  );
  let oneH = Math.floor(
    (money -
      (fiftyK * 50000 +
        tenK * 10000 +
        fiveK * 5000 +
        oneK * 1000 +
        fiveH * 500)) /
      100
  );
  let fifty = Math.floor(
    (money -
      (fiftyK * 50000 +
        tenK * 10000 +
        fiveK * 5000 +
        oneK * 1000 +
        fiveH * 500 +
        oneH * 100)) /
      50
  );
  let ten = Math.floor(
    (money -
      (fiftyK * 50000 +
        tenK * 10000 +
        fiveK * 5000 +
        oneK * 1000 +
        fiveH * 500 +
        oneH * 100 +
        fifty * 50)) /
      10
  );
  let one = Math.floor(
    (money -
      (fiftyK * 50000 +
        tenK * 10000 +
        fiveK * 5000 +
        oneK * 1000 +
        fiveH * 500 +
        oneH * 100 +
        fifty * 50 +
        ten * 10)) /
      1
  );

  answer.push(fiftyK, tenK, fiveK, oneK, fiveH, oneH, fifty, ten, one);

  return answer;
}

module.exports = problem5;
