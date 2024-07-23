snail = function(array) {
  if (array[0].length == 0) return [];
  
  let chk = (i, j) => (i >= 0 && i < array.length && j >= 0 && j < array[0].length && array[i][j] != -1);
  
  let result = [];
  let x = 0, y = 0;
  let dx = 1, dy = 0;
  for (let it = 1; it < array.length * array[0].length; it++) {
    result.push(array[y][x]);
    while (!chk(y + dy, x + dx)) [dx, dy] = [-dy, dx];
    console.log([y, x, dy, dx]);
    array[y][x] = -1;
    [x, y] = [x + dx, y + dy];
  }
  result.push(array[y][x]);
  return result;
}
