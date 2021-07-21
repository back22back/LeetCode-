/** 1041
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
  let instructionsQueue = instructions.repeat(4).split('');
  const directions = [ [0, 1], [1, 0], [0, -1], [-1, 0] ];
  let current = [0, 0];
  let currentDirection = 0;
  while (instructionsQueue.length) {
      let currentInstruction = instructionsQueue.shift();
      if (currentInstruction === 'L') {
          if (currentDirection === 0) {
              currentDirection = 4;
          }
          currentDirection -= 1;
      }
      if (currentInstruction === 'R') {
          if (currentDirection === 3) {
              currentDirection = -1;
          }
          currentDirection += 1;
      }
      if (currentInstruction === 'G') {
          current[0] += directions[currentDirection][0];
          current[1] += directions[currentDirection][1];
      }
  }
  if (current[0] === 0 && current[1] === 0) {
      return true;
  }
  return false;
};

