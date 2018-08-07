// GUI calculator
// Mrdoo
// 2018 08 03

// input object
// 입력 담당
var input = { 'array': [] };

input.getInput = function () {
    return this.array.join('');
};

input.removeAll = function(value) {
    this.array = [];
    this.array.push(value);
}

input.isEmpty = function() {
    return this.array.length === 0;
}

input.getValue = function() {
    var str = this.array.shift();
    var n = Number(str)
    return n;
};

input.prepare = function() {
    this.array = this.array.join('').split(' ');
}

input.getOperator = function() {
    var op = this.array.shift();
    if(op === '+' || op === '-' || op === '*' || op === '/') {
        return op;
    }
};

// output object
// 출력 담당
var output = {};
output.text = document.getElementById('output');
output.print = function(str) {
    this.text.innerHTML = str;
}

output.display = function() {
    this.text.innerHTML = input.getInput();
}

// calculator object
// 계산 담당
var calculator = {};
calculator.calculate = function(first, second, op) {
    var ret;
    if (op === '+') {
        ret = first + second;
    } else if (op === '-') {
        ret = first - second;
    } else if (op === '*') {
        ret = first * second;
    } else if (op === '/') {
        ret = first / second;
    } else {
        return NaN;
    }
    return ret;
}

// click button
// 버튼 클릭
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

    if (input.isEmpty()) {
        output.text.innerHTML = '0'
    } else {
        output.display();
    }
}

// result
// 결과값
var showResult = function (event) {
    input.prepare();
    var result = input.getValue();
    while(!input.isEmpty()) {
        var op = input.getOperator();
        var second = input.getValue();
        result = calculator.calculate(result, second, op);
    }
    output.print(result);
    input.removeAll(result);
}