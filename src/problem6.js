function problem6(forms) {
  //0번째 부터 ~ n번째 까지 모두 탐색을 함. 
  //단 한번 탐색시 중복한 것들을 한번에 삭제 후 재 탐색 반복.
  let ObjForms = mapTheList(forms);
  let box = [];
  for (let i = 0; i <forms.length; i++) {
    if (ObjForms.name[i].length >1) {
      box.push(FindArr(ObjForms.name[i],ObjForms));
    };
  };
  
  let setForms = new Set( box.reduce((acc,cur)=>{
    return acc.concat(...cur);
  },[]));

  let arrForms = Array.from(setForms);
  
  const lastForms = [];
  for(let j=0;j<arrForms.length;j++){
    let LastCheckName = ObjForms.name.indexOf(arrForms[j]);
    let LastCheckEmail = lastForms.indexOf(ObjForms.email[j])
    if(LastCheckName>-1 && LastCheckEmail===-1){
      lastForms.push(ObjForms.email[LastCheckName]);
    }
  }
  return lastForms.sort();
}

function mapTheList(list) {
  return list.reduce((acc, row) => {
    const [email, nickname] = row;
    acc['email'] = [...(acc['email'] || []), email];
    acc['name'] = [...(acc['name'] || []), nickname];
    return acc;
  }, {});
};

function FindArr(nickname,ObjForms) {
  let newForms = [];
  let checkname = "";
  for (let i = 0; i <nickname.length-1; i++) {
    checkname = nickname[i] + nickname[i+1];
    let checkbox = ObjForms.name.filter((item) => item.includes(checkname));
    if(checkbox.length >1){
      newForms.push(checkbox)
    };
  }
  return newForms;
};
module.exports = problem6;
