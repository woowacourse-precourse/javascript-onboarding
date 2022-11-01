const problem6 = (forms) => {
  let answer;
  return answer;
};

/*
=> 리스트를 map으로 {list[0] : list[1]} 의 형식으로 변형해서 하면 좋을 것 같다.

두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어 있는 경우 중복으로 간주한다.
=> Object.values.map으로 각이름에서 연속된 두글자로 분리해서 저장한뒤 
=> 해당 글자가 있으면 중복 처리를 해주면 될 것 같다.

result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거한다.
=> result.sort 구문으로 마무리하면 될 것 같다.
*/

module.exports = problem6;
