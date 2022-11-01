function problem6(forms) {
  const handle2email = new Map();
  const lookup = new Map();
  const res = new Set();

  for (let form of forms) {
    let address = form[0];
    let handle = form[1];

    if (handle.length < 2) continue;

    handle2email.set(handle, address);

    for (let i = 0; i < handle.length - 1; i++) {
      let emailKey = handle.slice(i, i + 2);
      if (lookup.has(emailKey)) {
        let emailVal = lookup.get(emailKey);
        if (emailVal == address) continue;
        res.add(emailVal);
        res.add(address);
      }
      lookup.set(emailKey, address);
    }
  }

  return Array.from(res).sort();
}

module.exports = problem6;
