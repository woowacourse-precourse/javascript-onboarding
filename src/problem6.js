function problem6(form_1) {

  function Exception(value){
    let email=value[0]
    let nickname=value[1]
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;// 1자 이상 20자 미만이다.
    const regex=/email.com/;//  신청할 수 있는 이메일은 email.com 도메인으로만 제한한다.
    if(value.length>=1&&value.length<=10000&&(email.length>=11&&email.length<20)){
      if(regex.test(email.split('@')[1])&&korean.test(nickname)&&nickname.length<20&&nickname.length>0){
        return value
      }
    }
  }
  let forms=form_1.filter(Exception);
  //이메일 저장 헤시
  let is_continue=new Map();
  let answer=[]
  //저장확인 헤시
  let is_store=new Map();
  forms.map((element)=>{
      let email=element[0]
      let nickname=element[1]
      for(let i=0;i<nickname.length-1;i++){
        let continue_name=nickname.substr(i,2)
        let email2=is_continue.get(continue_name)//email2
        if(email2===undefined){//헤시에 저장이 없음?
            is_continue.set(continue_name,email);//저장해
        }else if(email2!==undefined){//중복있어?
          if(is_store.get(email2)===undefined){//
              answer.push(email2);
              is_store.set(email2,true);
          }
          if(is_store.get(email)===undefined){
              answer.push(email);
              is_store.set(email,true);
          }
        }
      }
    }
  )
  answer.sort();
  console.log(answer)
  return answer;
}

module.exports = problem6;
