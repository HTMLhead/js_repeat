gugudan = function () {
    var str = document.getElementById('input').value
    var out = document.getElementById('output');
    var out2 = document.getElementById('output2');

    var arr = str.split(',')
    
    var str = ""
    var n1 = Number(arr[0]);

    if (arr.length === 1) {
        str += '<h2>' + arr[0] + '단</h2>'
        for (var i = 1; i < 10; i++) {
            str += Number(arr[0]) + ' * ' + i + ' = ' + (Number(arr[0] * i) + '<br>')
        }
    }

    var n2 = Number(arr[1]);
    var str2 = ""
    str2 += '<h2>' + n1 + ',' + n2 + "단</h2>"
    for (var i = 2; i <= n1; i++) {
        for (var j = 1; j <= n2; j++) {
            str2 += i + ' * ' + j + ' = ' + (i * j) + '<br>'
        }
    }


    out.innerHTML = str;
    out2.innerHTML = str2;
}
