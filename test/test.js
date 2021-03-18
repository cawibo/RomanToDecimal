require('mocha')
require('should')

const { expect } = require('chai')

const convert = require('../index')

describe('RomanToDecimal testsuite', () => {
  it('empty string should not throw an error', () => {
    expect(() => convert('')).to.not.throw()
  })

  it('non-existant numeral should return an error', () => {
    expect(() => convert('A')).to.throw()
  })

  describe('simple', () => {
    it('I should result in 1', () => {
      expect(convert('I').should.eql(1))
    })

    it('V should result in 5', () => {
      expect(convert('V').should.eql(5))
    })

    it('X should result in 10', () => {
      expect(convert('X').should.eql(10))
    })

    it('L should result in 50', () => {
      expect(convert('L').should.eql(50))
    })

    it('C should result in 100', () => {
      expect(convert('C').should.eql(100))
    })

    it('D should result in 500', () => {
      expect(convert('D').should.eql(500))
    })

    it('M should result in 1000', () => {
      expect(convert('M').should.eql(1000))
    })
  })

  describe('A bit more complex', () => {
    it('II should result in 2', () => {
      expect(convert('II').should.eql(2))
    })

    it('IIII should result in 4', () => {
      expect(convert('IIII').should.eql(4))
    })

    it('VI should result in 6', () => {
      expect(convert('VI').should.eql(6))
    })

    it('IV should result in 4', () => {
      expect(convert('IV').should.eql(4))
    })

    it('XXXIX should result in 39', () => {
      expect(convert('XXXIX').should.eql(39))
    })
  })

  describe('Dates', () => {
    it('M should be equal 1000', () => {
      expect(convert('M').should.eql(1000))
    })
    it('MC should be equal 1100', () => {
      expect(convert('MC').should.eql(1100))
    })
    it('MCC should be equal 1200', () => {
      expect(convert('MCC').should.eql(1200))
    })
    it('MCCC should be equal 1300', () => {
      expect(convert('MCCC').should.eql(1300))
    })
    it('MCD should be equal 1400', () => {
      expect(convert('MCD').should.eql(1400))
    })
    it('MD should be equal 1500', () => {
      expect(convert('MD').should.eql(1500))
    })
    it('MDC should be equal 1600', () => {
      expect(convert('MDC').should.eql(1600))
    })
    it('MDCC should be equal 1700', () => {
      expect(convert('MDCC').should.eql(1700))
    })
    it('MDCCC should be equal 1800', () => {
      expect(convert('MDCCC').should.eql(1800))
    })
    it('MCM should be equal 1900', () => {
      expect(convert('MCM').should.eql(1900))
    })
    it('MCMXC should be equal 1990', () => {
      expect(convert('MCMXC').should.eql(1990))
    })
    it('MCMXCI should be equal 1991', () => {
      expect(convert('MCMXCI').should.eql(1991))
    })
    it('MCMXCII should be equal 1992', () => {
      expect(convert('MCMXCII').should.eql(1992))
    })
    it('MCMXCIII should be equal 1993', () => {
      expect(convert('MCMXCIII').should.eql(1993))
    })
    it('MCMXCIV should be equal 1994', () => {
      expect(convert('MCMXCIV').should.eql(1994))
    })
    it('MCMXCV should be equal 1995', () => {
      expect(convert('MCMXCV').should.eql(1995))
    })
    it('MCMXCVI should be equal 1996', () => {
      expect(convert('MCMXCVI').should.eql(1996))
    })
    it('MCMXCVII should be equal 1997', () => {
      expect(convert('MCMXCVII').should.eql(1997))
    })
    it('MCMXCVIII should be equal 1998', () => {
      expect(convert('MCMXCVIII').should.eql(1998))
    })
    it('MCMXCIX should be equal 1999', () => {
      expect(convert('MCMXCIX').should.eql(1999))
    })
    it('MM should be equal 2000', () => {
      expect(convert('MM').should.eql(2000))
    })
    it('MMI should be equal 2001', () => {
      expect(convert('MMI').should.eql(2001))
    })
    it('MMII should be equal 2002', () => {
      expect(convert('MMII').should.eql(2002))
    })
    it('MMIII should be equal 2003', () => {
      expect(convert('MMIII').should.eql(2003))
    })
    it('MMIV should be equal 2004', () => {
      expect(convert('MMIV').should.eql(2004))
    })
    it('MMV should be equal 2005', () => {
      expect(convert('MMV').should.eql(2005))
    })
    it('MMVI should be equal 2006', () => {
      expect(convert('MMVI').should.eql(2006))
    })
    it('MMVII should be equal 2007', () => {
      expect(convert('MMVII').should.eql(2007))
    })
    it('MMVIII should be equal 2008', () => {
      expect(convert('MMVIII').should.eql(2008))
    })
    it('MMIX should be equal 2009', () => {
      expect(convert('MMIX').should.eql(2009))
    })
    it('MMX should be equal 2010', () => {
      expect(convert('MMX').should.eql(2010))
    })
    it('MMXI should be equal 2011', () => {
      expect(convert('MMXI').should.eql(2011))
    })
    it('MMXII should be equal 2012', () => {
      expect(convert('MMXII').should.eql(2012))
    })
    it('MMXIII should be equal 2013', () => {
      expect(convert('MMXIII').should.eql(2013))
    })
    it('MMXIV should be equal 2014', () => {
      expect(convert('MMXIV').should.eql(2014))
    })
    it('MMXV should be equal 2015', () => {
      expect(convert('MMXV').should.eql(2015))
    })
    it('MMXVI should be equal 2016', () => {
      expect(convert('MMXVI').should.eql(2016))
    })
    it('MMXVII should be equal 2017', () => {
      expect(convert('MMXVII').should.eql(2017))
    })
    it('MMXVIII should be equal 2018', () => {
      expect(convert('MMXVIII').should.eql(2018))
    })
    it('MMXIX should be equal 2019', () => {
      expect(convert('MMXIX').should.eql(2019))
    })
    it('MMXX should be equal 2020', () => {
      expect(convert('MMXX').should.eql(2020))
    })
    it('MMXXI should be equal 2021', () => {
      expect(convert('MMXXI').should.eql(2021))
    })
    it('MMXXII should be equal 2022', () => {
      expect(convert('MMXXII').should.eql(2022))
    })
    it('MMXXIII should be equal 2023', () => {
      expect(convert('MMXXIII').should.eql(2023))
    })
    it('MMXXIV should be equal 2024', () => {
      expect(convert('MMXXIV').should.eql(2024))
    })
    it('MMXXV should be equal 2025', () => {
      expect(convert('MMXXV').should.eql(2025))
    })
  })

  describe('Generated', () => {
    it('I should be equal 1', () => {
      expect(convert('I').should.eql(1))
    })
    it('II should be equal 2', () => {
      expect(convert('II').should.eql(2))
    })
    it('III should be equal 3', () => {
      expect(convert('III').should.eql(3))
    })
    it('IV should be equal 4', () => {
      expect(convert('IV').should.eql(4))
    })
    it('V should be equal 5', () => {
      expect(convert('V').should.eql(5))
    })
    it('VI should be equal 6', () => {
      expect(convert('VI').should.eql(6))
    })
    it('VII should be equal 7', () => {
      expect(convert('VII').should.eql(7))
    })
    it('VIII should be equal 8', () => {
      expect(convert('VIII').should.eql(8))
    })
    it('IX should be equal 9', () => {
      expect(convert('IX').should.eql(9))
    })
    it('X should be equal 10', () => {
      expect(convert('X').should.eql(10))
    })
    it('XI should be equal 11', () => {
      expect(convert('XI').should.eql(11))
    })
    it('XII should be equal 12', () => {
      expect(convert('XII').should.eql(12))
    })
    it('XIII should be equal 13', () => {
      expect(convert('XIII').should.eql(13))
    })
    it('XIV should be equal 14', () => {
      expect(convert('XIV').should.eql(14))
    })
    it('XV should be equal 15', () => {
      expect(convert('XV').should.eql(15))
    })
    it('XVI should be equal 16', () => {
      expect(convert('XVI').should.eql(16))
    })
    it('XVII should be equal 17', () => {
      expect(convert('XVII').should.eql(17))
    })
    it('XVIII should be equal 18', () => {
      expect(convert('XVIII').should.eql(18))
    })
    it('XIX should be equal 19', () => {
      expect(convert('XIX').should.eql(19))
    })
    it('XX should be equal 20', () => {
      expect(convert('XX').should.eql(20))
    })
    it('XXI should be equal 21', () => {
      expect(convert('XXI').should.eql(21))
    })
    it('XXII should be equal 22', () => {
      expect(convert('XXII').should.eql(22))
    })
    it('XXIII should be equal 23', () => {
      expect(convert('XXIII').should.eql(23))
    })
    it('XXIV should be equal 24', () => {
      expect(convert('XXIV').should.eql(24))
    })
    it('XXV should be equal 25', () => {
      expect(convert('XXV').should.eql(25))
    })
    it('XXVI should be equal 26', () => {
      expect(convert('XXVI').should.eql(26))
    })
    it('XXVII should be equal 27', () => {
      expect(convert('XXVII').should.eql(27))
    })
    it('XXVIII should be equal 28', () => {
      expect(convert('XXVIII').should.eql(28))
    })
    it('XXIX should be equal 29', () => {
      expect(convert('XXIX').should.eql(29))
    })
    it('XXX should be equal 30', () => {
      expect(convert('XXX').should.eql(30))
    })
    it('XXXI should be equal 31', () => {
      expect(convert('XXXI').should.eql(31))
    })
    it('XXXII should be equal 32', () => {
      expect(convert('XXXII').should.eql(32))
    })
    it('XXXIII should be equal 33', () => {
      expect(convert('XXXIII').should.eql(33))
    })
    it('XXXIV should be equal 34', () => {
      expect(convert('XXXIV').should.eql(34))
    })
    it('XXXV should be equal 35', () => {
      expect(convert('XXXV').should.eql(35))
    })
    it('XXXVI should be equal 36', () => {
      expect(convert('XXXVI').should.eql(36))
    })
    it('XXXVII should be equal 37', () => {
      expect(convert('XXXVII').should.eql(37))
    })
    it('XXXVIII should be equal 38', () => {
      expect(convert('XXXVIII').should.eql(38))
    })
    it('XXXIX should be equal 39', () => {
      expect(convert('XXXIX').should.eql(39))
    })
    it('XL should be equal 40', () => {
      expect(convert('XL').should.eql(40))
    })
    it('XLI should be equal 41', () => {
      expect(convert('XLI').should.eql(41))
    })
    it('XLII should be equal 42', () => {
      expect(convert('XLII').should.eql(42))
    })
    it('XLIII should be equal 43', () => {
      expect(convert('XLIII').should.eql(43))
    })
    it('XLIV should be equal 44', () => {
      expect(convert('XLIV').should.eql(44))
    })
    it('XLV should be equal 45', () => {
      expect(convert('XLV').should.eql(45))
    })
    it('XLVI should be equal 46', () => {
      expect(convert('XLVI').should.eql(46))
    })
    it('XLVII should be equal 47', () => {
      expect(convert('XLVII').should.eql(47))
    })
    it('XLVIII should be equal 48', () => {
      expect(convert('XLVIII').should.eql(48))
    })
    it('XLIX should be equal 49', () => {
      expect(convert('XLIX').should.eql(49))
    })
    it('L should be equal 50', () => {
      expect(convert('L').should.eql(50))
    })
    it('LI should be equal 51', () => {
      expect(convert('LI').should.eql(51))
    })
    it('LII should be equal 52', () => {
      expect(convert('LII').should.eql(52))
    })
    it('LIII should be equal 53', () => {
      expect(convert('LIII').should.eql(53))
    })
    it('LIV should be equal 54', () => {
      expect(convert('LIV').should.eql(54))
    })
    it('LV should be equal 55', () => {
      expect(convert('LV').should.eql(55))
    })
    it('LVI should be equal 56', () => {
      expect(convert('LVI').should.eql(56))
    })
    it('LVII should be equal 57', () => {
      expect(convert('LVII').should.eql(57))
    })
    it('LVIII should be equal 58', () => {
      expect(convert('LVIII').should.eql(58))
    })
    it('LIX should be equal 59', () => {
      expect(convert('LIX').should.eql(59))
    })
    it('LX should be equal 60', () => {
      expect(convert('LX').should.eql(60))
    })
    it('LXI should be equal 61', () => {
      expect(convert('LXI').should.eql(61))
    })
    it('LXII should be equal 62', () => {
      expect(convert('LXII').should.eql(62))
    })
    it('LXIII should be equal 63', () => {
      expect(convert('LXIII').should.eql(63))
    })
    it('LXIV should be equal 64', () => {
      expect(convert('LXIV').should.eql(64))
    })
    it('LXV should be equal 65', () => {
      expect(convert('LXV').should.eql(65))
    })
    it('LXVI should be equal 66', () => {
      expect(convert('LXVI').should.eql(66))
    })
    it('LXVII should be equal 67', () => {
      expect(convert('LXVII').should.eql(67))
    })
    it('LXVIII should be equal 68', () => {
      expect(convert('LXVIII').should.eql(68))
    })
    it('LXIX should be equal 69', () => {
      expect(convert('LXIX').should.eql(69))
    })
    it('LXX should be equal 70', () => {
      expect(convert('LXX').should.eql(70))
    })
    it('LXXI should be equal 71', () => {
      expect(convert('LXXI').should.eql(71))
    })
    it('LXXII should be equal 72', () => {
      expect(convert('LXXII').should.eql(72))
    })
    it('LXXIII should be equal 73', () => {
      expect(convert('LXXIII').should.eql(73))
    })
    it('LXXIV should be equal 74', () => {
      expect(convert('LXXIV').should.eql(74))
    })
    it('LXXV should be equal 75', () => {
      expect(convert('LXXV').should.eql(75))
    })
    it('LXXVI should be equal 76', () => {
      expect(convert('LXXVI').should.eql(76))
    })
    it('LXXVII should be equal 77', () => {
      expect(convert('LXXVII').should.eql(77))
    })
    it('LXXVIII should be equal 78', () => {
      expect(convert('LXXVIII').should.eql(78))
    })
    it('LXXIX should be equal 79', () => {
      expect(convert('LXXIX').should.eql(79))
    })
    it('LXXX should be equal 80', () => {
      expect(convert('LXXX').should.eql(80))
    })
    it('LXXXI should be equal 81', () => {
      expect(convert('LXXXI').should.eql(81))
    })
    it('LXXXII should be equal 82', () => {
      expect(convert('LXXXII').should.eql(82))
    })
    it('LXXXIII should be equal 83', () => {
      expect(convert('LXXXIII').should.eql(83))
    })
    it('LXXXIV should be equal 84', () => {
      expect(convert('LXXXIV').should.eql(84))
    })
    it('LXXXV should be equal 85', () => {
      expect(convert('LXXXV').should.eql(85))
    })
    it('LXXXVI should be equal 86', () => {
      expect(convert('LXXXVI').should.eql(86))
    })
    it('LXXXVII should be equal 87', () => {
      expect(convert('LXXXVII').should.eql(87))
    })
    it('LXXXVIII should be equal 88', () => {
      expect(convert('LXXXVIII').should.eql(88))
    })
    it('LXXXIX should be equal 89', () => {
      expect(convert('LXXXIX').should.eql(89))
    })
    it('XC should be equal 90', () => {
      expect(convert('XC').should.eql(90))
    })
    it('XCI should be equal 91', () => {
      expect(convert('XCI').should.eql(91))
    })
    it('XCII should be equal 92', () => {
      expect(convert('XCII').should.eql(92))
    })
    it('XCIII should be equal 93', () => {
      expect(convert('XCIII').should.eql(93))
    })
    it('XCIV should be equal 94', () => {
      expect(convert('XCIV').should.eql(94))
    })
    it('XCV should be equal 95', () => {
      expect(convert('XCV').should.eql(95))
    })
    it('XCVI should be equal 96', () => {
      expect(convert('XCVI').should.eql(96))
    })
    it('XCVII should be equal 97', () => {
      expect(convert('XCVII').should.eql(97))
    })
    it('XCVIII should be equal 98', () => {
      expect(convert('XCVIII').should.eql(98))
    })
    it('XCIX should be equal 99', () => {
      expect(convert('XCIX').should.eql(99))
    })
    it('C should be equal 100', () => {
      expect(convert('C').should.eql(100))
    })
    it('CC should be equal 200', () => {
      expect(convert('CC').should.eql(200))
    })
    it('CCC should be equal 300', () => {
      expect(convert('CCC').should.eql(300))
    })
    it('CD should be equal 400', () => {
      expect(convert('CD').should.eql(400))
    })
    it('D should be equal 500', () => {
      expect(convert('D').should.eql(500))
    })
    it('DC should be equal 600', () => {
      expect(convert('DC').should.eql(600))
    })
    it('DCC should be equal 700', () => {
      expect(convert('DCC').should.eql(700))
    })
    it('DCCC should be equal 800', () => {
      expect(convert('DCCC').should.eql(800))
    })
    it('CM should be equal 900', () => {
      expect(convert('CM').should.eql(900))
    })
  })

  require('./python_generated')
})
