let width = 5;
let height = 5;

let grid = []
for (i = 0; i < height; i ++) {
  let row = new Array(width);
  row.fill('water')
  grid.push(row)
}

console.log(grid)
