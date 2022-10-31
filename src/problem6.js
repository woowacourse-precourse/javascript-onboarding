/*
  기능구현 목록
  1. Obj_Convert 함수를 이용하여 email과 name 두개로 나눠주는 작업을 구현 후 ObjForms 에 대입한다.
  2. forms 길이만큼 반복문을 시행 후 ObjForms에 담겨져 있는 name의 길이가 2 이상인 것들이 나오면 Find_Arr 함수에 현재 i 와 ObjForms를 넘겨준 후 box에 push한다.
  3. Find_Arr 함수에서 넘어온 ObjForms와 num을 이용하여 checkname에 중복 체크를 위해 문자 2개를 대입 후 
  checkbox 변수에 현재 ObjForms에 동일한 이름이 있는지 filter.includes 함수를 통해 확인 후 중복하는 문자가 길이 2 이상인 경우 newForms에 현재 중복으로 나온 name에 email를 대입해준다.
  4. box에 중복된 값을 없애기 위해 Set과 함수를 합치기 위해 concat를 이용하여 Set_Forms에 대입한다.
  5. Set type을 Array 타입으로 바꾸기 위해 Array.from 을 이용하였고 이를 Arr_Forms에 대입하여 반환하였다.
*/

function problem6(forms) {
  const ObjForms = Obj_Convert(forms);
  let box = [];
  for (let i = 0; i < forms.length; i++) {
    if (ObjForms.name[i].length > 1) {
      box.push(Find_Arr(i,ObjForms));
    };
  };
  let Set_Forms = new Set(box.reduce((acc, cur) => {
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

function Find_Arr(num, ObjForms) {
  let newForms = [];
  let checkname = "";
  for (let i = 0; i < ObjForms.name[num].length - 1; i++) {
    checkname = ObjForms.name[num][i] + ObjForms.name[num][i+1];
    let checkbox = ObjForms.name.filter((item) => item.includes(checkname));
    if (checkbox.length > 1) {
      newForms.push(ObjForms.email[num]);
    };
  };
  return newForms;
};
module.exports = problem6;
