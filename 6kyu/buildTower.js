// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

//My answer
function towerBuilder(floors) {
    let space, star, tower = []
    for (let i = 1; i <= floors; i++) {
        space = ' '.repeat(floors - i)
        star = '*'.repeat((i * 2) - 1)
        tower.push(`${space}${star}${space}`)
    }
    return tower
}