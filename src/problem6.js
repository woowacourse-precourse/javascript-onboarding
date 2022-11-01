// [✅] forms의 배열에서 email과 nickName을 분리한 배열을 각각 만든다.
// [] 걸러진 이메일을 담을 result 배열을 만든다.
// [] nickName 배열을 순회하며 두 글자 이상의 문자가 연속적으로 포함된 닉네임의 index를 모두 찾는다.
// [] email 배열과 nickName 배열의 순서는 같으므로 찾은 닉네임 index로 email[index]에 해당하는 이메일을 result 배열에 넣는다.
// [] result 내 이메일 목록을 오름차순 정렬한다.
// [] result 내 이메일 목록에서 중복된 이메일을 제거한다.

// [예외처리] -> 제한 사항에 어긋나는 경우로, forms 배열에서 제거
// 신청한 이메일의 길이가 11자 이상 20자 미만이 아닌 경우 (email >= 11 && nick < 20)
// 신청한 이메일이 "email.com" 도메인이 아닌 경우
// 신청한 닉네임이 한글이 아닌 경우
// 신청한 닉네임의 길이가 1글자 이상 20글자 미만이 아닌 경우 (nick >= 1 && nick < 20)

function problem6(forms) {
  const email = [];
  const nickName = [];
  forms.forEach((data) => {
    email.push(data[0]);
    nickName.push(data[1]);
  });
  return email;
}

console.log(
  problem6([
    ['jm@email.com', '제이엠'],
    ['jason@email.com', '제이슨'],
    ['woniee@email.com', '워니'],
    ['mj@email.com', '엠제이'],
    ['nowm@email.com', '이제엠'],
  ])
);

module.exports = problem6;
