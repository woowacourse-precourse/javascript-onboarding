function problem6(forms) {
  //0번째 부터 ~ n번째 까지 모두 탐색을 함. 
  //단 한번 탐색시 중복한 것들을 한번에 삭제 후 재 탐색 반복.
  let ObjForms = Obj_Convert(forms);
  let box = [];
  for (let i = 0; i < forms.length; i++) {
    if (ObjForms.name[i].length > 1) {
      box.push(Find_Arr(ObjForms.name[i], ObjForms,ObjForms.email[i]));
    };
  };
  let Set_Forms = new Set( box.reduce((acc, cur) => {
    return acc.concat(...cur);
  }, []));
  let Arr_Forms = Array.from(Set_Forms);
  return Arr_Forms.sort();
}

function Obj_Convert(list) {
  return list.reduce((acc, row) => {
    const [email, nickname] = row;
    acc['email'] = [...(acc['email'] || []), email];
    acc['name'] = [...(acc['name'] || []), nickname];
    return acc;
  }, {});
};

function Find_Arr(nickname, ObjForms,email) {
  let newForms = [];
  let checkname = "";
  for (let i = 0; i < nickname.length - 1; i++) {
    checkname = nickname[i] + nickname[i + 1];
    let checkbox = ObjForms.name.filter((item) => item.includes(checkname));
    if (checkbox.length > 1) {
      newForms.push(email);
    };
  };
  return newForms;
};
module.exports = problem6;
