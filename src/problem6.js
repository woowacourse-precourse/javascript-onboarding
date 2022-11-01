function problem6(forms) {
  let arr = [];
  let arrr = [];
  for (let i = 0; i < forms.length; i++) {
    arr.push(forms[i][1]);
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length - 1; k++) {
      for (let j = i + 1; j < arr.length; j++) {
        let a = arr[j];
        let al = arr[j].length;
        arr[j].replace(arr[i][k] + arr[i][k + 1], "");
        console.log(arr[i][k] + arr[i][k + 1]);
        if (al !== arr[j].length) {
          arrr.push(a);
        }
        console.log(arrr);
      }
    }
  }
}
module.exports = problem6;
