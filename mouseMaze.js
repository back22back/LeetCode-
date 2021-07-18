/* input: matrix of arrays
   output: matrix of arrays with 1s on the path
   constraints: cannot walk thru walls/1s
   edge: no possible path.
*/
const matrix = [
[ 0, 1, 1, 1 ],
[ 0, 0, 1, 0 ],
[ 1, 0, 1, 1 ],
[ 0, 0, 0, 0 ]
]

/* places walked array
curr = 0,0
try directions(its own function, return next coordinates or null)
if return null, go back one slot (places walked array.pop)
if return coordinates, places walked array.push(last coordinate), also make curr coordinate 1, curr move to the returned coordinates
*/
let walked = [];

const mazeRunner = (matrix, end) => {
  let current = [0, 0];
  let finished = move(current, matrix, end);
  return finished;
};

const move = (current, matrix, end) => {
  let newLocation = directions(current, matrix);
  matrix[current[0]][current[1]] = 1;

  if (current[0] === 0 && current[1] === 0) {
    return null;
  }
  if (current[0] === end[0] && current[1] === end[1]) {
    return matrix;
  }

  if (newLocation) {
    walked.push(current);
    current = newLocation;
  } else {
    current = walked.pop();
  }
  move(current, matrix);
}

const directions = (curr, matrix) => {
  var directionsArray = [[-1, 0], [1, 0], [0, 1], [0, -1]];
  let newLocation;
  for (var i = 0; i < directionsArray.length; i++) {
    newLocation = [ curr[0] + directionsArray[i][0], curr[1] + directionsArray[i][1] ];
    if (matrix[newLocation[0]][newLocation[1]]) {
      continue;
    } else {
      return newLocation;
    }
  }
  return null;
}