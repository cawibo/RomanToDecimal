
from roman import toRoman

tests = []

for i in range(5000):
    test = """
    it('{roman} should result in {decimal}', () => {{
        expect(convert('{roman}').should.be.eql({decimal}))
    }})
    """
    tests.append(test.format(roman=toRoman(i), decimal=i))

with open("python_generated.js", 'w') as f:
    f.write("\n".join(tests))