function problem1(pobi, crong) {
  let leftP = pobi[0].toString();
  let rightP = pobi[1].toString();
  let leftC = crong[0].toString();
  let rightC = crong[1].toString();

  if (
    parseInt(leftP) + 1 !== parseInt(rightP) ||
    parseInt(leftC) + 1 !== parseInt(rightC)
  ) {
    return -1;
  } else {
    let leftsumP = 0;
    let leftmultiP = 1;
    let rightsumP = 0;
    let rightmultiP = 1;

    let leftsumC = 0;
    let leftmultiC = 1;
    let rightsumC = 0;
    let rightmultiC = 1;

    for (let j = 0; j < leftP.length; j++) {
      leftsumP += parseInt(leftP[j]);
      leftmultiP *= parseInt(leftP[j]);
    }
    for (let i = 0; i < rightP.length; i++) {
      rightsumP += parseInt(rightP[i]);
      rightmultiP *= parseInt(rightP[i]);
    }

    for (let k = 0; k < leftC.length; k++) {
      leftsumC += parseInt(leftC[k]);
      leftmultiC *= parseInt(leftC[k]);
    }
    for (let p = 0; p < rightC.length; p++) {
      rightsumC += parseInt(rightC[p]);
      rightmultiC *= parseInt(rightC[p]);
    }

    Ppresult = Math.max(leftsumP, leftmultiP, rightsumP, rightmultiP);
    Cpresult = Math.max(leftsumC, leftmultiC, rightsumC, rightmultiC);

    if (Ppresult > Cpresult) {
      return 1;
    } else if (Ppresult < Cpresult) {
      return 2;
    } else if ((Ppresult = Cpresult)) {
      return 0;
    }
  }
}

module.exports = problem1;
