const max_range = 400;
const min_range = 0;

function Page(add, multiply) {
  this.add = add;
  this.multiply = multiply;
  this.score = Math.max(this.add, this.multiply);
}

function page_add(page) {
  let answer = 0;
  for (let i = 0; i < page.length; i++) {
    let number = Number(page[i]);

    answer += number;
  }

  return answer;
}

function page_mulitply(page) {
  let answer = 1;
  for (let i = 0; i < page.length; i++) {
    let number = Number(page[i]);
    answer *= number;
  }

  return answer;
}

function out_of_bound(person) {
  if (person.add == min_range || person.multiply == min_range) {
    return true;
  }
  if (person.add == max_range || person.multiply == max_range) {
    return true;
  }
  return false;
}

function problem1(pobi, crong) {
  var answer;

  let pobi_left_page = new Page(
    page_add(pobi[0].toString()),
    page_mulitply(pobi[1].toString())
  );

  let pobi_right_page = new Page(
    page_add(pobi[1].toString()),
    page_mulitply(pobi[1].toString())
  );

  const pobi_score = Math.max(pobi_left_page.score, pobi_right_page.score);

  let crong_left_page = new Page(
    page_add(crong[0].toString()),
    page_mulitply(crong[0].toString())
  );

  let crong_right_page = new Page(
    page_add(crong[1].toString()),
    page_mulitply(crong[1].toString())
  );

  const crong_score = Math.max(crong_left_page.score, crong_right_page.score);

  if (
    out_of_bound(pobi_left_page) ||
    out_of_bound(pobi_right_page) ||
    out_of_bound(crong_left_page) ||
    out_of_bound(crong_right_page)
  ) {
    answer = -1;
  } else if (crong_score > pobi_score) {
    answer = 2;
  } else if (pobi_score > crong_score) {
    answer = 1;
  } else if (pobi_score == crong_score) {
    answer = 0;
  }

  return answer;
}

module.exports = problem1;
