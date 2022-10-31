//알파벳 객체
function alphabet(alpha, ascii) {
  this.alpha = alpha;
  this.ascii = ascii;
  //알파벳아스키를 증가시키고 아스키에 따라 알파벳 변환

  this.increase_alpha = function () {
    this.ascii += 1;
    this.alpha = String.fromCharCode(this.ascii);
  };

  //알파벳 아스키를 감소시키고 알파벳 변환
  this.decrease_alpha = function () {
    this.ascii -= 1;
    this.alpha = String.fromCharCode(this.ascii);
  };

  //소문자인지 판별
  this.islower = function () {
    if (this.alpha >= 'a' && this.alpha <= 'z') {
      return true;
    }
    return false;
  };

  //알파벳 대문자로 변환
  this.toupper = function () {
    this.alpha = this.alpha.toUpperCase();
    return this.alpha;
  };

  //알파벳 소문자로 변환
  this.tolower = function () {
    this.alpha = this.alpha.toLowerCase();
    return this.alpha;
  };
}

function map_insert(first, last, map) {
  //A부터 Z까지 받아서 알파벳 객체 생성
  let first_alpha = new alphabet(first, first.charCodeAt(0));
  let last_alpha = new alphabet(last, last.charCodeAt(0));

  //A가 Z가 될때까지 A는 증가, Z는 감소
  while (first_alpha.alpha !== last) {
    map.set(first_alpha.alpha, last_alpha.alpha);
    first_alpha.increase_alpha();
    last_alpha.decrease_alpha();
  }

  //최종적인 사전(map)을 리턴
  map.set(first_alpha.alpha, last_alpha.alpha);
  return map;
}

function problem4(word) {
  var answer = '';
  let map = new Map();
  map = map_insert('A', 'Z', map);
  word = [...word];

  word.forEach((alpha) => {
    //문자열의 문자마다 객체 만들어주고, 프로토타입을 map으로 설정
    let word_each = new alphabet(alpha, alpha.charCodeAt(0));
    word_each.prototype = map;

    //공백문자면 그냥 더해주고
    if (word_each.alpha === ' ') {
      answer += ' ';
    }
    //소문자라면 대문자로 바꾸고, 사전에서 대응되는 문자를 찾아서 그 문자를 더해줌
    else if (word_each.islower()) {
      word_each.toupper();
      word_each.alpha = word_each.prototype.get(word_each.alpha);
      answer += word_each.tolower(word_each.alpha);
    }
    //대문자라면 사전에서 대응되는 문자 바로 찾기
    else {
      answer += word_each.prototype.get(word_each.alpha);
    }
  });

  return answer;
}

module.exports = problem4;
