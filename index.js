const _throw = (msg) => {
  throw msg
}

const mapping = {
  N: 0,
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

const convert = (string) => {
  if (string.length === 0) return 0
  if (string.length === 1) return mapping.hasOwnProperty(string) ? mapping[string] : _throw('invalid numeral')

  const left_lit = string.charAt(0)
  const left_val = convert(left_lit)

  const right_lit = string.substring(1)
  const right_val = convert(right_lit)

  if (mapping[left_lit] < mapping[right_lit.charAt(0)]) return right_val - left_val
  return left_val + right_val
}

module.exports = convert
