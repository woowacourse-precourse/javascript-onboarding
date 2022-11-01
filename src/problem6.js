function problem6(forms) {
  let answer = new Set();

  for (let i=0; i<forms.length; i++)
  {
    for (let j=i+1; j<forms.length; j++)
    {
      if (similar_name(forms[i][1], forms[j][1]))
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

function similar_name(nickname_1, nickname_2)
{
  for (let i=0; i<nickname_1.length-1; i++)
  {
    if (nickname_2.match(`${nickname_1[i]}${nickname_1[i + 1]}`))
    return true;
  }
  return false;
}

module.exports = problem6;
