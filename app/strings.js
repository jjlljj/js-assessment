exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    const chars = str.split('')

    return chars.reduce((acc, char, idx) => {
      if (chars[idx+amount] === char) {
        return acc
      }
      return acc + char
    }, '')
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

  //iterative 
  //reverseString: function(str) {
    //const split = str.split('')

    //return split.reduce((acc, char) => {
      //return char + acc
    //}, [])
  //}
  
  //recursive
  reverseString: function(str) {
    if (!str) return ''

    let char = str[0]
    let substr = str.substring(1, str.length)

    return this.reverseString(substr) + char
  }
};
