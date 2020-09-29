const solution = (str, ending) => str.substring((str.length - ending.length)) === ending;

console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)