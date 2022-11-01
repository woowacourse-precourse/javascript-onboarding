//새로운 문자열을 만든다.
function create_newstr(firstindex, lastindex, answer) {
  let first_str = answer.substr(0, firstindex);
  let last_str = answer.substr(lastindex + 1, answer.length);

  return first_str + last_str;
}

//중복문자의 시작부터 끝까지 찾으면서 answer_obj의 0번쨰에는 true를 1번쨰에는 인덱스를 넣어서 반환
function find_last_index(firstindex, lastindex, answer) {
  lastindex = 0;
  let answer_obj = [0, 0];
  for (let i = firstindex + 1; i < answer.length; i++) {
    if (answer[firstindex] !== answer[i]) {
      return false;
    }
    answer_obj[0] = true;
    answer_obj[1] = i;
    return answer_obj;
  }
}

function problem2(cryptogram) {
  let answer = cryptogram;

  while (true) {
    let is_not_valid = false;
    for (let i = 0; i < answer.length - 1; i++) {
      if (answer[i] === answer[i + 1]) {
        let next_index = 0;

        const result_of_findindex = find_last_index(i, next_index, answer);
        //중복문자가 있는 경우

        if (result_of_findindex !== false) {
          //is_not_valid(중복문자가 있는지 여부)를 true,중복 문자의 마지막 인덱스 저장
          is_not_valid = result_of_findindex[0];
          next_index = result_of_findindex[1];
        }
        //중복 문자가 있다면 새 문자열을 만든다
        if (is_not_valid) {
          answer = create_newstr(i, next_index, answer);
        } else {
          break;
        }
      }
    }
    //중복문자가 없다면 종료
    if (is_not_valid == false) {
      break;
    }
  }

  return answer;
}

module.exports = problem2;
