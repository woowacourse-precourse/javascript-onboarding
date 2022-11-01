function problem6(forms) {
  var answer =  sortEmail(cheakNickName(forms));

  return answer;
}

function sortEmail(crew){
  let email = Array.from(crew);
  
  email.sort();
  return email;
}

function cheakNickName(crew){

  const email = new Set();
  let key = new Set(); // 중복된 단어가 뭔지 넣어!
  let setKey = new Set(); // 모든 크루 이름 끊어서 넣어
 
  for(let i = 0; i < crew.length; i++){
    const name = crew[i][1];
    if(name.length < 2) continue;

    let setName = new Set(); //한명의 크루 이름에 중복 방지
    for(let j = 0; j < name.length - 1; j++){
       setName.add(name.substr(j, j+2));
    }
    
    setName.forEach( e =>{
      if(setKey.has(e)){
        email.add(crew[i][0]);
        key.add(e);
      }
      setKey.add(e);
    })//새로운 key 넣기
   } // 처음 단어를 넣은 크루 빼고 다 email에 들어가있음
   
   key.forEach( e=>{
    for(let i = 0; i < crew.length; i++){
      let setName2 = new Set();
      const name2 = crew[i][1];
      for(let j = 0; j < name2.length - 1; j++){
        setName2.add(name2.substr(j, j+2));
      }
      if(setName2.has(e)){
        email.add(crew[i][0]);;
        break;
      }
    }
   })
   //처음 닉네임을 쓴 크루도 경고 대상
  return email;
}


/*
input이 이중배열로 들어감(2차원배열) 
forms.length는 몇명인지 나옴
name 각각 문자열 2개씩 끊어서 있는지 확인> set 사용함
set을 사용하는 이유는 집합이기 때문에 원소중복을 허용하지 않음
없으면 set 안에 포함시킴. 
set안에 key가 있으면 경고대상이기 때문에 새로운 배열에 넣어준다
근데 만약에 이름이 제이제이 라서 첫 key인 제이가 set에 들어가는데 두번째 제이는 포함 안되면?
이경우는 어떻게 다루나 > 셋 두개 만들어!
처음 중복된 닉네임 사용한 크루는 그때 당시는 중복이 아니기 때문에 들어가지 않는다
따라서 다시 한번 첫번째 크루를 찾아줘야함. 

set, sort 사용
*/
module.exports = problem6;
