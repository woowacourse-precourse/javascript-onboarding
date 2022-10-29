function problem3(number) {
  var answer;
  let count = 0;
  const arr = Array.from({ length: number }, (v, i) => i + 1);
  const str = arr.join("");
  let found_arr = [];
  //1부터 number까지 들어있는 배열 생성, 문자열로 바꾸기
  function find_num(str) {
    for (let i = 3; i < 10; i += 3) {
      //3,6,9를 찾기 위해 순회
      let positon = 0;
      while (true) {
        let found = str.indexOf(i, positon); //i가 들어간 index 찾기
        if (found == -1) {
          break; //i가 들어간 부분 없으면(-1) break
        }
        positon = found + 1; //i의 index 찾고 positon +1
        found_arr.push(found); // 찾은 index 배열에 넣기
      }
    }
    return found_arr;
  }
  find_num(str); //found_arr에 3,6,9가 위치한 Index 들어있는 상태
  answer = found_arr.length; // 배열의 길이(3,6,9의 갯수) = 박수를 쳐야 할 횟수
  return answer;
}

module.exports = problem3;
