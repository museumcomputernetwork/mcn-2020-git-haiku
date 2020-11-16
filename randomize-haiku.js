/** @format */
const fs = require('fs')

const haikus = fs
  .readdirSync('haikus')
  .filter(filename => filename.match(/.md$/))
  .map(filename => fs.readFileSync(`haikus/${filename}`, { encoding: 'utf-8' }))
  .join('\n')
  .split('\n\n')
  .filter(haiku => haiku.trim() !== '') // reject empty lines
  .filter(haiku => {
    // make sure there are at least 3 lines
    const lines = haiku.split('\n')

    // TODO verify 3 lines are a haiku, then one blank line?
    return lines.length >= 3
  })

/**
 * Randomly select 3 haikus.
 * Take one line from each -- in order! -- and re-combine them into a new haiku
 */
shuffle(haikus)

const exquisiteHaiku = haikus.slice(0, 3).reduce((reduction, haiku, index) => {
  const haikuLines = haiku.split('\n')
  reduction += haikuLines[index] + '    \n'

  return reduction
}, '')

console.info(exquisiteHaiku)

// minimized shuffle from https://stackoverflow.com/a/25984542
function shuffle(a, b, c, d) {
  //array,placeholder,placeholder,placeholder
  c = a.length
  while (c)
    (b = (Math.random() * c--) | 0), (d = a[c]), (a[c] = a[b]), (a[b] = d)
}
