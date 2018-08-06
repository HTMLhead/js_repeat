//JS calculator
//by mrdoo
//2018. 8. 03

//input object
//입력담당
var input = {
    'array': []
};

input.removeAll = function (str) {
    return this.array.length === 0;
}

input.empty = function () {
    return this.array.length === 0;
}

input.getValue = function () {
    var str = this.array.shift();
    var n = Number(str);
    return n;
}

input.getOperator = function () {
    var op = this.array.shift.shift();
    if (op === '+' || op === '-' || op === '*' || op === '/') {
        return op;
    } else {
        return '&';
    }
};

//output object
//출력 담당
var calculator = {};
calculator.calculate = function (first, second, op) {
    var ret;
    switch (op) {
        case '+':
            ret = first + second;
            break;
        case '-':
            ret = first - second;
            break;
        case '*':
            ret = first * second;
            break;
        case '/':
            ret = first / second;
            break;
        default:
            return NaN;
    }
    return ret;
}
input.getInput = function () {
    return this.array.join('');
};

var output = {};
output.text = document.getElementById('output');

//calculator 객체
//계산 담당
var clickNumbers = function (event) {
    var str = event.target.innerHTML;
    console.log(str);

    if (str === 'BS') {
        input.array.pop();
    } else if (str === '+' || str === '-' || str === '*' || str === '/') {
        input.array.push(' ' + str + ' ');
    } else {
        input.array.push(str);
    }

    if (input.array.length === 0) {
        output.text.innerHTML = '0'
    } else {
        output.text.innerHTML = input.getInput();
    }
}

var showResult = function (event) {
    console.log('click other')
    console.log(event.target.innerHTML);
}