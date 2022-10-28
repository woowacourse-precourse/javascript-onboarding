function Person(str) {
  this.name = str;
  this.map = [];
  this.score = 0;
}

//모든 사람을 구합니다(중복 제거)
function find_all_person(frients, visitors) {
  let personset = new Set();
  frients.forEach((person) => {
    personset.add(person[0]);
    personset.add(person[1]);
  });

  visitors.forEach((person) => {
    personset.add(person);
  });

  return personset;
}

//사람별로 객체를만들고, 객체 배열을 반환합니다
function create_person_obj(set) {
  let new_person_list = [];
  for (const value of set) {
    let new_person = new Person(value);
    new_person_list.push(new_person);
  }
  return new_person_list;
}

//객체 배열안에서 이름을 바탕으로 객체를 찾아서 반환
function find_person_inobj(objarray, name) {
  let person = objarray.find((Person) => Person.name === name);
  return person;
}

//객체의 프로퍼티에 친구 넣기
function insert_map(first, second) {
  first.map.push(second);
  second.map.push(first);
}

//타임라인 방문시 1 추가
function visite_timeline(objarray, name) {
  let person = find_person_inobj(objarray, name);
  person.score += 1;
}
//모든 친구 관계 추가
function handle_friends(person_obj_list, friends) {
  friends.forEach((person) => {
    let person_first = find_person_inobj(person_obj_list, person[0]);
    let person_second = find_person_inobj(person_obj_list, person[1]);
    insert_map(person_first, person_second);
  });
}

//타임 라인 방문자 점수 추가
function handle_visitors(person_obj_list, visitors) {
  visitors.forEach((person) => {
    visite_timeline(person_obj_list, person);
  });
}

function is_friend(person_obj_list, user) {
  let userobj = find_person_inobj(person_obj_list, user);
  userobj.map.forEach((person) => {
    let target_person = find_person_inobj(person_obj_list, person.name);
    target_person.score = 0;
  });
}

function is_user(person, user) {
  if (person.name === user) {
    return true;
  }
  return false;
}

function handle_common_friend(person_obj_list, user) {
  person_obj_list.forEach((person) => {
    if (is_user(person, user) === false) {
      has_common_friend(person, user.map);
    }
  });
}
function has_common_friend(person, user_map) {
  let update_score = person.score;

  person.map.forEach((person_map_inner) => {
    let person_map_inner_name = person_map_inner.name;
    if (find_person_inobj(user_map, person_map_inner_name)) {
      update_score += 10;
    }
  });
  person.score += update_score;
}

function problem7(user, friends, visitors) {
  var answer;

  let all_person = find_all_person(friends, visitors);
  let person_obj_list = create_person_obj(all_person);

  handle_friends(person_obj_list, friends);

  handle_common_friend(
    person_obj_list,
    find_person_inobj(person_obj_list, user)
  );
  handle_visitors(person_obj_list, visitors);
  is_friend(person_obj_list, user);
  answer = [];

  person_obj_list.forEach((person) => {
    if (person.name !== user && person.score !== 0 && answer.length <= 5) {
      answer.push(person);
    }
  });

  answer.sort(function (a, b) {
    return b.score - a.score;
  });
  const final_result = [];
  answer.forEach((person) => {
    final_result.push(person.name);
  });
  return final_result;
}

module.exports = problem7;
