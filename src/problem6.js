let email_list = [];
let nickname_map = new Map();
let mapping_map = new Map();

//인덱스-문자열 매핑
function mapping(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], i);
  }
  return map;
}

//인덱스가 연속적인지, 올바른지 여부
function is_valid_index(map, str) {
  if (str.length < 2) {
    return false;
  }
  for (let i = 1; i < str.length; i++) {
    if (map.get(str[i]) - map.get(str[i - 1]) !== 1) {
      return false;
    }
  }
  return true;
}

//닉네임이 맵에 존재하는지 여부
function if_nickname_has(map, nickname) {
  if (map.has(nickname)) {
    return true;
  }
  return false;
}

function find_all_str(str, nickname, nicknamemap, visited, email) {
  if (str.length === nickname.length + 1) {
    return false;
  }

  if (is_valid_index(nicknamemap, str) === true) {
    if (if_nickname_has(nickname_map, str) === false) {
      nickname_map.set(str, nickname);
    } else {
      email_list.push(mapping_map.get(nickname_map.get(str)));
      email_list.push(mapping_map.get(nickname));
    }
  }

  for (let i = 0; i < nickname.length; i++) {
    if (visited[i] === false) {
      visited[i] = true;
      let new_str = str + nickname[i];
      find_all_str(new_str, nickname, nicknamemap, visited, email);
      visited[i] = false;
    }
  }
}

function array_to_set(arr) {
  const answer = new Set(arr);
  const final_answer = Array.from(answer);
  final_answer.sort();
  return final_answer;
}

function problem6(forms) {
  var answer;
  let visited = [];
  for (let i = 0; i < forms.length; i++) {
    visited.push(false);
    mapping_map.set(forms[i][1], forms[i][0]);
  }
  for (let i = 0; i < forms.length; i++) {
    visited.fill(false);
    let nickname = forms[i][1];
    let map = mapping(nickname);
    let email = forms[i][0];
    find_all_str('', nickname, map, visited, email);
  }

  return array_to_set(email_list);
}

module.exports = problem6;
