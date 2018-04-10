exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    const chars = str.split('')

    return chars.reduce((acc, char, idx) => {
      if (chars[idx+amount] === char) {
        return acc
      }
      return [...acc, char]
    }, []).join('')
  },

  wordWrap: function(str, cols) {
    const split = str.split(' ')
    let shift = 0

    return split.reduce((acc, string, idx) => {
      if (string.length === 1 && idx > 0) {
        shift++
        acc[idx - shift] += ` ${string}`
        return acc
      } 
      return [...acc, string]
    },[]).join('\n')
  },

  reverseString: function(str) {

  }
};
