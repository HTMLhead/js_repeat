function getFirstValue() {
    var n1 = Number(prompt('첫번째 값을 입력해 주세요'));
    return n1;
}

var n = 2

function getSecondValue() {
    var n2 = Number(prompt(n + '번째 값을 입력해 주세요'));
    n++;
    return n2;
}

function getOperator () {
    while(true) {
        var op = prompt('연산자를 입력해 주세요')
        if (op === '+' || op === '-' || op === '*' || op === '/' || op === 'q') {
            break;
        } else {
            alert('다시.');
        }
    }
    return op;
}

function calculate (first, second, op) {
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
}

function print(value) {
    var out = document.getElementById('output');
    out.innerHTML = '결과값은 ' + value + '입니다.'
}

function main() {
    var result = getFirstValue();
    while (true) {
        var op = getOperator();
        if (op === 'q') {
            break;
        }
        var num2 = getSecondValue();
        result = calculate(result, num2, op);
    }
    print(result);
}
main();
