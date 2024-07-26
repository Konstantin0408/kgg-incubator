function solution(x) {
  let res = 0;
  for (let i = 0; i < x; i++) {
    if ((i % 3 == 0) || (i % 5 == 0)) res += i;
  }
  return res;
  // too lazy to solve it mathematically
}
