function big_page_compare(book_page) {
  let res = 0;
  res = big_page_add(book_page[0]);
  let res2 = big_page_Multiplication(book_page[0]);
  if (res < res2) res = res2;
  res2 = big_page_add(book_page[1]);
  if (res < res2) res = res2;
  res2 = big_page_Multiplication(book_page[1]);
  if (res < res2) res = res2;
  return res;
}

function big_page_add(book_page) {
  let left_book_page_idx = book_page.toString();
  let res = 0;
  for (i = 0; i < left_book_page_idx.length; i++)
    res = res + parseInt(left_book_page_idx[i]);
  return res;
}

function big_page_Multiplication(book_page) {
  let left_book_page_idx = book_page.toString();
  let res = 1;
  for (i = 0; i < left_book_page_idx.length; i++)
    res = res * parseInt(left_book_page_idx[i]);
  return res;
}

function open_book(book_page) {
  if (book_page[1] - book_page[0] != 1) return -1;
  if (1 > book_page[0] || book_page[0] > 400) return -1;
  else if (1 > book_page[1] || book_page[1] > 400) return -1;
  if (book_page[0] % 2 == 0) return -1;
  else if (book_page[1] % 2 == 1) return -1;
  return 1;
}

function problem1(pobi, crong) {
  let pobi_res = open_book(pobi);
  let crong_res = open_book(crong);
  let res = 0;
  if (pobi_res == -1 || crong_res == -1) return -1;
  pobi_res = 0;
  crong_res = 0;
  pobi_res = big_page_compare(pobi);
  crong_res = big_page_compare(crong);
  if (pobi_res > crong_res) return 1;
  else if (pobi_res < crong_res) return 2;
  else if (pobi_res == crong_res) return 0;
}

module.exports = problem1;
