class User {
  constructor(name, arr) {
    this.name = name;
    this.input = arr;
    let l = arr[0];
    let r = arr[1];

    let lArr = this.toArr(l);
    let rArr = this.toArr(r);

    let l_sum = lArr.reduce((i, j) => Number(i) + Number(j));
    let l_prod = lArr.reduce((i, j) => Number(i) * Number(j));
    this.point_l = Math.max(l_sum, l_prod);

    let r_sum = rArr.reduce((i, j) => Number(i) + Number(j));
    let r_prod = rArr.reduce((i, j) => Number(i) * Number(j));
    this.point_r = Math.max(r_sum, r_prod);
    this.correct = this.valid;
  }
  get valid() {
    let input = this.input;
    if (input.length !== 2) {
      // alert(`[${input}] input error: input length must be 2.`);
      return false
    }
    else if (this.input[0] + 1 !== this.input[1]) {
      // alert(`[${input}] input error: page numbers must be successive.`);
      return false
    }
    else if (this.input[0] % 2 === 0 && this.input[1] === 1) {
      // alert(`[${input}] input error: left(right) page must be odd(even).`);
      return false
    }
    else if (this.input[0] < 1 || this.input[1] > 400) {
      // alert(`[${input}] input error: page numbers must take 1~400.`);
      return false
    }
    else {
      return true
    }
  }
  get point() {
    return Math.max(this.point_l, this.point_r);
  }
  toArr(x) {
    if (typeof (x) === 'number') {
      return [...String(x)]
    }
    else if (typeof (x) === 'string') {
      return [...x]
    }
    else {
      return x
    }
  }
}

function problem1(pobi, crong) {
  var answer;

  let pobiInfo = new User('pobi', pobi);
  let crongInfo = new User('crong', crong);
  // console.log(pobiInfo)
  // console.log(crongInfo)

  if (pobiInfo.valid === false || crongInfo.valid === false) {
    answer = -1
  }
  else {
    if (pobiInfo.point > crongInfo.point) {
      answer = 1
    }
    else if (pobiInfo.point < crongInfo.point) {
      answer = 2
    }
    else {
      answer = 0
    }
  }
  return answer;
}

module.exports = problem1;
