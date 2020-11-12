/** @format */
const fs = require('fs')

const haikus = fs
  .readFileSync('./haikus-basho.md', { encoding: 'utf-8' })
  .split('\n\n')

/**
 * Randomly select 3 haikus.
 * Take one line from each -- in order! -- and re-combine them into a new haiku
 */
shuffle(haikus)

const exquisiteHaiku = haikus.slice(0, 3).reduce((reduction, haiku, index) => {
  const haikuLines = haiku.split('\n')
  reduction += haikuLines[index] + '\n'

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
