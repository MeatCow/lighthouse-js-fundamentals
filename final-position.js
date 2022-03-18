function finalPosition(moves) {
  let position = [0, 0];

  for (let move of moves) {
    switch (move) {
      case "north":
        position[1]++;
        break;
      case "east":
        position[0]++;
        break;
      case "south":
        position[1]--;
        break;
      case "west":
        position[0]--;
        break;
      default:
        console.log("unknown direction");
        break;
    }
  }

  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];
const position = finalPosition(moves);

console.log(position);