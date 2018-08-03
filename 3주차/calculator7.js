var output = document.getElementById('output');

function getString(str) {
    var string = str.split(' ');
    return string;
}

function getNumbers(numbers, string) {
    for (i = 0; i < string.length; i = i + 2) {
        numbers.push(string[i])
    }
}

function getOperators(ops, string) {
    for (i = 1; i < string.length; i = i + 2) {
        ops.push(string[i])
    }
}

function calculate(num, op) {
    var ret = Number(num[0])
    for (var i = 0; i < op.length; i++) {
        if (op[i] === '+') {
            ret = ret + Number(num[i + 1]);
        } else if (op[i] === '-') {
            ret = ret - Number(num[i + 1]);
        } else if (op[i] === '*') {
            ret = ret * Number(num[i + 1]);
        } else if (op[i] === '/') {
            ret = ret / Number(num[i + 1]);
        }
    }
    return ret;
}

function print(value) {
    var out = document.getElementById('output');
    out.innerHTML = '계산값은 :' + value + '입니다.'
}

function calc() {
    var numbers = [];
    var ops = [];
    var str = document.getElementById('input').value
    var string = getString(str);
    getNumbers(numbers, string);
    getOperators(ops, string);
    var result = calculate(numbers, ops);
    print(result);
}