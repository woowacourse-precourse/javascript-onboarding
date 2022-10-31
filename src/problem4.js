const head_u = "A".charCodeAt(0);
const tail_u = "Z".charCodeAt(0);
const head_l = "a".charCodeAt(0);
const tail_l = "z".charCodeAt(0);

const isAlpha = (charcode) =>
  (charcode >= head_u && charcode <= tail_u) ||
  (charcode >= head_l && charcode <= tail_l);
