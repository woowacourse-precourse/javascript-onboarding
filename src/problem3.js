function problem3(number) {
  
  let number_arr = [];

  for (i=0; i<number+1; i++) {
    number_arr.push(i);
  }

return [...number_arr.toString().matchAll(/[3|6|9]/g)].length;

}

module.exports = problem3;
