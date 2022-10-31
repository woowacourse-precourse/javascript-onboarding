function problem5(money) {
  if (money < 1 || money > 1000000) return;

  const fiftyThousands = Math.floor(money / 50000);
  const tenThousands = Math.floor((money % 50000) / 10000);
  const fiveThousands = Math.floor(((money % 50000) % 10000) / 5000);
  const thousands = Math.floor((((money % 50000) % 10000) % 5000) / 1000);
  const fiveHundreds = Math.floor(
    ((((money % 50000) % 10000) % 5000) % 1000) / 500
  );
  const hundreds = Math.floor(
    (((((money % 50000) % 10000) % 5000) % 1000) % 500) / 100
  );
  const fifties = Math.floor(
    ((((((money % 50000) % 10000) % 5000) % 1000) % 500) % 100) / 50
  );
  const tens = Math.floor(
    (((((((money % 50000) % 10000) % 5000) % 1000) % 500) % 100) % 50) / 10
  );
  const units =
    (((((((money % 50000) % 10000) % 5000) % 1000) % 500) % 100) % 50) % 10;

  return [
    fiftyThousands,
    tenThousands,
    fiveThousands,
    thousands,
    fiveHundreds,
    hundreds,
    fifties,
    tens,
    units,
  ];
}

module.exports = problem5;
