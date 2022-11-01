function problem6(forms) {
  var answer = solution(forms);
  return answer;
}

function solution(forms){
  let result = new Array(); // 중복적인 이름을 가진 크루의 이메일
  let temp = new Array();

  let name = new Array();
  let email = new Array();
  
  forms.forEach((crew, index)=>{
    //console.log("["+index+"]" + "name: "+crew[1]+"\temail: "+crew[0]);
    name.push(crew[1]);
    email.push(crew[0]);
  });
  //console.log("[*] NAME LIST: "+ name);
  //console.log("[*] EMAIL LIST: "+ email);
  name.forEach((idA, index) => {
    if(index < idA.length - 1){
      let emailA = email[index];
      for(let i = index + 1; i<name.length;i++){
        let idB = name[i];
        let emailB = email[i];
        //console.log("[*] COMPARING: "+idA + ", "+idB);
        if(compares(idB, idA)){
          //console.log("[!] MATCHED: "+idA + ", "+idB);
          temp.push(emailA);
          temp.push(emailB);
        }
       // console.log(temp);
      }
    }
  }); 

  temp.forEach((t)=>{
    if(!result.includes(t)){
      result.push(t);
    }
  });

  result.sort();
  return result;
}

function compares(idA, idB){
  idA = Array.from(idA);
  for(let i = 0; i<idA.length - 1; i++){
    const regex = idA[i] + idA[i+1];
    if(idB.match(regex)){
      return 1;
    }
  }
  return 0;
}

module.exports = problem6;
