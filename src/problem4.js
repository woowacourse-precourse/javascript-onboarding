function problem4(word) {
  var answer;
  let obj = {
    A: "Z",
    B: "Y",
    C: "X",
    D: "W",
    E: "V",
    F: "U",
    G: "T",
    H: "S",
    I: "R",
    J: "Q",
    K: "P",
    L: "O",
    M: "N",
    N: "M",
    O: "L",
    P: "K",
    Q: "J",
    R: "I",
    S: "H",
    T: "G",
    U: "F",
    V: "E",
    W: "D",
    X: "C",
    Y: "B",
    Z: "A",
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a",
  };

  const engcheck = /^[a-zA-Z\s]+$/;
  let w = word;

  //제한사항 처리
  if (w.length > 1000) {
    return (answer = "1000자 이하로 적어주세요.");
  } else if (!engcheck.test(w)) {
    return (answer = "알파벳을 입력해주세요");
  }

  let arr = w.split("");
  let stack = [];
  let objKey = Object.keys(obj).map((x) => {
    return x;
  });
  let keyStr = JSON.stringify(objKey);

  for (let i = 0; i <= w.length; i++) {
    let afterKey = objKey.filter((x) => {
      return x.indexOf(arr[i]) > -1;
    });
    if (keyStr.includes(arr[i])) {
      stack.push(obj[afterKey]);
    } else if (arr[i] === " ") {
      stack.push(" ");
    }
  }

  answer = stack.toString().replace(/,/g, "");
  return answer;
}

module.exports = problem4;
