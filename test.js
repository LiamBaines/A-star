let perms = [];

function add(left, right) {
  if (left.length === 0) {
    perms.push(right);
  } else {
    left.forEach((element, index) => {
      let newLeft = left.slice()
      let newRight = right.slice()
      newRight.push(newLeft.splice(index, 1)[0])
      add(newLeft, newRight, left.length - 1)
    });
  }
}

function all(arr) {
  console.log(perms)
  add(arr.slice(), [], arr.length)
  console.log(perms)
}

let arr = [1, 2, 3]

all(arr)

