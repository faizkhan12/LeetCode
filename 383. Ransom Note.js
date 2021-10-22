/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (!ransomNote) return true
  if (!magazine) return false
  const map = {}
  // iterate thru magazine
  for (let i = 0; i < magazine.length; i++) {
    // increment char count in map
    if (!map[magazine.charAt(i)]) map[magazine.charAt(i)] = 0
    map[magazine.charAt(i)]++
  }

  // iterate thru ransom note
  for (let i = 0; i < ransomNote.length; i++) {
    // if char not in map, or count is <= 0, break ret false
    if (!map[ransomNote.charAt(i)] || map[ransomNote.charAt(i)]-- <= 0) {
      return false
    }
  }

  // no problems
  return true
}
