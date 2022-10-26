function map_insert(first, last, map) {
  let first_alpha = first;
  let first_ascii = first_alpha.charCodeAt(0);
  let last_alpha = last;
  let last_ascii = last_alpha.charCodeAt(0);

  while (first_alpha !== last) {
    map.set(first_alpha, last_alpha);
    first_ascii++;
    last_ascii--;
    first_alpha = String.fromCharCode(first_ascii);
    last_alpha = String.fromCharCode(last_ascii);
  }

  map.set(first_alpha, last_alpha);
}

function is_lower(str) {
  if (str >= 'a' && str <= 'z') {
    return true;
  }
  return false;
}

function to_upper(str) {
  str = str.toUpperCase(str);
  return str;
}

function to_lower(str) {
  str = str.toLowerCase(str);
  return str;
}

function mapping_str(str, map) {
  return map.get(str);
}

function problem4(word) {
  var answer = '';
  let map = new Map();
  map_insert('A', 'Z', map);

  for (let i = 0; i < word.length; i++) {
    if (word[i] === ' ') {
      answer += ' ';
    } else {
      if (is_lower(word[i])) {
        let new_word = to_upper(word[i]);
        let new_word_value = mapping_str(new_word, map);
        answer += to_lower(new_word_value);
      } else {
        answer += map.get(word[i]);
      }
    }
  }

  return answer;
}

module.exports = problem4;
