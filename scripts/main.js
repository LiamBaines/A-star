function Astar (maze, r, c, R, C) {
  let w = maze[0].length;
  let h = maze.length;
  let queue = [];
  let closed = [];
  let rte = '';
  let found = false;
  const dirs = {
    U: [-1, 0],
    R: [0, 1],
    D: [1, 0],
    L: [0, -1]
  };
  class Node {
    constructor(route, y, x) {
      this.route = route;
      this.y = y;
      this.x = x;
      this.dist = route.length;
      this.f = this.dist + Math.sqrt(Math.pow(C - x, 2) + Math.pow(R - y, 2));
    }
  }
  queue.push(new Node('', r, c))
  while (!found) {
    let currentNode = queue[0];
    queue.forEach(node => {
      if (node.f < currentNode.f) {
        currentNode = node;
      }
    });
    for (let dir in dirs) {
      r = currentNode.y;
      c = currentNode.x;
      rte = currentNode.route
      r+= dirs[dir][0];
      c+= dirs[dir][1];
      if (r < h && c < w && r >= 0 && c >= 0) {
        if (maze[r][c] != 'tree') {
          if (r == R && c == C) {
            console.log(`route found! ${rte.concat(dir)}`)
            console.log(queue.length)
            found = true;
          }
          if(!queue.some(node => node.y == r && node.x == c) && !closed.some(node => node.y == r && node.x == c)) {
            queue.push(new Node(rte.concat(dir), r, c))
          }
        }
      }
    }
    closed.push(currentNode);
    queue.shift()
  }
}

let arr = [
  [0, -1, 0, 0, 0],
  [0, 0, 0, -1, 0],
  [0, -1, -1, -1, 0],
  [0, 0, 0, -1, 0],
]

Astar(arr, 0, 0, 3, 4)