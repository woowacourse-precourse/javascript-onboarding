function problem1(pobi, crong) {
  var answer;
  var pobi_largest, crong_largest;

  if(pobi[0] !== (pobi[1] - 1)) return -1;
  else if(crong[0] !== (crong[1] - 1)) return -1;

  pobi_largest = calculate(pobi);
  crong_largest = calculate(crong);
  answer = result(pobi_largest, crong_largest);
  return answer;
}

function calculate(pages) {
  var odd_digit = [];
  var even_digit = [];
  var odd_page_plus, odd_page_multi, odd_page_largest;
  var even_page_plus, even_page_multi, even_page_largest;
  var largest_var;

  for(var i = 0; i < 3; i++){
    odd_digit[i] = pages[0] % 10;
    pages[0] = Math.floor(pages[0] / 10);
    if(pages[0] <= 0) break;
  }

  for(var j = 0; j < 3; j++){
    even_digit[j] = pages[1] % 10;
    pages[1] = Math.floor(pages[1] / 10);
    if(pages[1] <= 0) break;
  }

  odd_page_plus = odd_digit[0] + odd_digit[1] + odd_digit[2];
  odd_page_multi = odd_digit[0] * odd_digit[1] * odd_digit[2];
  odd_page_largest = (odd_page_plus > odd_page_multi) ? odd_page_plus : odd_page_multi;


  even_page_plus = even_digit[0] + even_digit[1] + even_digit[2];
  even_page_multi = even_digit[0] * even_digit[1] * even_digit[2];
  even_page_largest = (even_page_plus > even_page_multi) ? even_page_plus : even_page_multi;

  largest_var = (odd_page_largest > even_page_largest) ? odd_page_largest : even_page_largest;

  return largest_var;
}

function result(pobi, crong) {
  if(pobi > crong) return 1;
  else if(pobi < crong) return 2;
  else return 0;
}

module.exports = problem1;

//필요 변수 : [포비의 책 페이지(2), 크롱의 책 페이지(2)] << 1이상 400이하, 결과 값
