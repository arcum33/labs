'use strict';

function kvad(x, y, z) {
    let a = +document.getElementById(x).value;
    let b = +document.getElementById(y).value;
    let c = +document.getElementById(z).value;
    if (!isNaN(a + b + c)) {
        if (a == 0) { alert('Ахтунг, аргумент "A" = 0'); } else {
            console.log(a, b, c);
            console.log(typeof(a), typeof(b), typeof(c));
            let d = b ** 2 - 4 * a * c;
            if (d < 0) { alert('Дискриминант меньше нуля!!!') } else {
                let x1 = (-b + d ** (1 / 2)) / (2 * a);
                let x2 = (-b - d ** (1 / 2)) / (2 * a);
                alert(`X1 =  ${x1}, X2 =  ${x2}`);
            }
        }
    } else alert('Проблема, где-то не цифра')
}