var input = {
    count: 2
};

input.getFirstValue = function () {
    var n1 = Number(prompt('첫번째 값을 입력해 주세요'));
    return n1;
};

input.getSecondValue = function () {
    var n2 = Number(prompt(this.count + '번째 값을 입력해 주세요'));
    this.count++;
    return n2;
};

input.getOperator = function () {
    while (true) {
        var op = prompt('연산자를 입력해 주세요')
        if (op === '+' || op === '-' || op === '*' || op === '/' || op === 'q') {
            break;
        } else {
            alert('다시.');
        }
    }
    return op;
};

var calculator = {};
calculator.calculate = function(first, second, op) {
    var ret;
    switch (op) {
        case '+':
            ret = first + second
            break;
        case '-':
            ret = first - second
            break;
        case '*':
            ret = first * second
            break;
        case '/':
            ret = first / second
            break;
    }
    return ret;
};

var output = {};
output.out = document.getElementById('output');

output.print = function(value) {
    this.out.innerHTML = '결과값은 ' + value + '입니다.'
}

function main() {
    var result = input.getFirstValue();
    while (true) {
        var op = input.getOperator();
        if (op === 'q') {
            break;
        }
        var num2 = input.getSecondValue();
        result = calculator.calculate(result, num2, op);
    }
    output.print(result);
}
main();
