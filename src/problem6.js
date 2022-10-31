/*
두 닉네임 A, B에 대해서 "비슷한 닉네임" 여부 검사해주는 함수 필요
  A에서 연속된 두 문자를 골라 B에 있는지 확인

이중 for문으로 두 닉네임을 골라 비슷한지 비교해서 비슷하면 set에 저장
*/

function problem6(forms) {
  let answer = new Set();

  for (let i=0; i<forms.length; i++)
  {
    for (let j=i+1; j<forms.length; j++)
    {
      if (is_similar(forms[i][1], forms[j][1]))
      {
        answer.add(forms[i][0]);
        answer.add(forms[j][0]);
      }
    }
  }

  answer = Array.from(answer);
  answer.sort();
  
  return answer;
}

function is_similar(nickname_1, nickname_2)
{
  for (let i=0; i<nickname_1.length-1; i++)
  {
    if (nickname_2.match(`${nickname_1[i]}${nickname_1[i + 1]}`))
      return true;
  }
  return false;
}

module.exports = problem6;
