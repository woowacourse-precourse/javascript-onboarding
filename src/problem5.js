function problem5(money) {
  let result = [];

  // 오만원
  result.push(parseInt(money / 50000));

  // 만원
  if (parseInt(money / 10000) % 5 === 0) {
    result.push(0);
  } else {
    result.push(parseInt(money / 10000));
  }

  // 오천원
  result.push(parseInt(String(money).slice(-4) / 5000));

  // 천원
  if (parseInt(String(money).slice(-4) / 1000) % 5 === 0) {
    result.push(0);
  } else {
    result.push(parseInt(String(money).slice(-4) / 1000));
  }

  // 오백원
  result.push(parseInt(String(money).slice(-3) / 500));

  // 백원
  if (parseInt(String(money).slice(-3) / 100) % 5 === 0) {
    result.push(0);
  } else {
    result.push(parseInt(String(money).slice(-3) / 100));
  }

  // 오십원
  result.push(parseInt(String(money).slice(-2) / 50));

  // 십원
  if (parseInt(String(money).slice(-2) / 10) % 5 === 0) {
    result.push(0);
  } else {
    result.push(parseInt(String(money).slice(-2) / 10));
  }

  // 일원
  result.push(parseInt(String(money).slice(-1)));

  return result;
}

module.exports = problem5;
