function problem1(pobi, crong) {
  let pobi_arr = pobi.join("").split("");
  let crong_arr = crong.join("").split("");

  let pobi_left_max = Math.max(
    pobi_arr.slice(0, pobi_arr.length / 2).reduce((a, c) => +a + +c),
    pobi_arr.slice(0, pobi_arr.length / 2).reduce((a, c) => +a * +c)
  );
  let pobi_rigth_max = Math.max(
    pobi_arr.slice(pobi_arr.length / 2).reduce((a, c) => +a + +c),
    pobi_arr.slice(pobi_arr.length / 2).reduce((a, c) => +a * +c)
  );

  let pobi_max = Math.max(pobi_left_max, pobi_rigth_max); //63 , 72 > right 72

  let crong_left_max = Math.max(
    crong_arr.slice(0, crong_arr.length / 2).reduce((a, c) => +a + +c),
    crong_arr.slice(0, crong_arr.length / 2).reduce((a, c) => +a * +c)
  );
  let crong_rigth_max = Math.max(
    crong_arr.slice(crong_arr.length / 2).reduce((a, c) => +a + +c),
    crong_arr.slice(crong_arr.length / 2).reduce((a, c) => +a * +c)
  );

  let crong_max = Math.max(crong_left_max, crong_rigth_max);

  return pobi[1] - pobi[0] !== 1
    ? -1
    : pobi_max > crong_max
    ? 1
    : pobi_max < crong_max
    ? 2
    : 0;
}

module.exports = problem1;
