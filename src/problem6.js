function problem6(forms) {

  answer=[];

 let checkList = [];
 forms.map((elements) => {
  nickName = elements[1];

  for(i =0; i<nickName.length-1; i++) {
    checkList.push(nickName.substr(i,2))
  }
 })

 let arr = checkList.filter((element, index) => checkList.indexOf(element) != index);
 arr = new Set(arr);
 arr = [...arr]
 return arr;

}
console.log(problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]));
// module.exports = problem6;
