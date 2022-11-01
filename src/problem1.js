function problem1(pobi, crong) {
  let a = 0;
  let b;
  let c;
  let d;
  let e;
  let f;
  let g;
  let h;
  let arr = [];
  let arrr = [];
  let answer;

  if (String(pobi[0]).length === 2) {
    a = (pobi[0] % 10) + Math.floor(pobi[0] / 10);
  } else if (String(pobi[0]).length === 3) {
    a =
      Math.floor(pobi[0] / 100) +
      (Math.floor(pobi[0] / 10) % 10) +
      (pobi[0] % 10);
  }
  if (String(pobi[0]).length === 2) {
    b = (pobi[0] % 10) * Math.floor(pobi[0] / 10);
  } else if (String(pobi[0]).length === 3) {
    b =
      Math.floor(pobi[0] / 100) *
      (Math.floor(pobi[0] / 10) % 10) *
      (pobi[0] % 10);
  }
  if (String(pobi[1]).length === 2) {
    c = (pobi[1] % 10) + Math.floor(pobi[1] / 10);
  } else if (String(pobi[0]).length === 3) {
    c =
      Math.floor(pobi[1] / 100) +
      (Math.floor(pobi[1] / 10) % 10) +
      (pobi[1] % 10);
  }
  if (String(pobi[1]).length === 2) {
    d = (pobi[1] % 10) * Math.floor(pobi[1] / 10);
  } else if (String(pobi[0]).length === 3) {
    d =
      Math.floor(pobi[1] / 100) *
      (Math.floor(pobi[1] / 10) % 10) *
      (pobi[1] % 10);
  }
  if (String(crong[0]).length === 2) {
    e = (crong[0] % 10) + Math.floor(crong[0] / 10);
  } else if (String(crong[0]).length === 3) {
    e =
      Math.floor(crong[0] / 100) +
      (Math.floor(crong[0] / 10) % 10) +
      (crong[0] % 10);
  }
  if (String(crong[0]).length === 2) {
    f = (crong[0] % 10) * Math.floor(crong[0] / 10);
  } else if (String(crong[0]).length === 3) {
    f =
      Math.floor(crong[0] / 100) *
      (Math.floor(crong[0] / 10) % 10) *
      (crong[0] % 10);
  }
  if (String(crong[1]).length === 2) {
    g = (crong[1] % 10) + Math.floor(crong[1] / 10);
  } else if (String(crong[1]).length === 3) {
    g =
      Math.floor(crong[1] / 100) +
      (Math.floor(crong[1] / 10) % 10) +
      (crong[1] % 10);
  }
  if (String(crong[1]).length === 2) {
    h = (crong[1] % 10) * Math.floor(crong[1] / 10);
  } else if (String(crong[1]).length === 3) {
    h =
      Math.floor(crong[1] / 100) *
      (Math.floor(crong[1] / 10) % 10) *
      (crong[1] % 10);
  }
  arr.push(a, b, c, d);
  arrr.push(e, f, g, h);
  let pob = Math.max(...arr);
  let cor = Math.max(...arrr);
  if (pob > cor) {
    answer = 1;
  } else if (pob < cor) {
    answer = 2;
  } else if (pob === cor) {
    answer = 0;
  }
  if (
    String(pobi[0]).length !== String(pobi[1]).length ||
    String(crong[0]).length !== String(crong[1]).length ||
    pobi[1] > 400 ||
    crong[1] > 400 ||
    crong[0] < 0 ||
    pobi[0] < 0
  ) {
    answer = -1;
  }
  return answer;
}
module.exports = problem1;
