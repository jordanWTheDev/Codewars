// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
//
// For example: ["3:1", "2:2", "0:1", ...]
//
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
//
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:
//
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

//My Answer
function points(games) {
  let totalPoints = 0;
  for (let i = 0; i < games.length; i++) {
    let game = games[i]
    let points = game.split(':')
    if (points[0] > points[1]) {
      totalPoints += 3
    } else if (points[0] === points[1]) {
      totalPoints += 1
    }
  }
  return totalPoints;
}

//Better Answer
const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

//OR
function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}
