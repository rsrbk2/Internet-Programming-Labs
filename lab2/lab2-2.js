function getPi(method) {
    let currentPi;

    switch (method) {
        case 1:
            return {
                'info': 'Row, 1st expression',
                'compute': function () {
                    currentPi = 1 / 2;
                    for (let k = 1; k < 10000; k++) {
                        currentPi += (1 / Math.pow(16, k))
                            * (8 / (8 * k + 2) + 4 / (8 * k + 3) + 4 / (8 * k + 4) + 1 / (8 * k + 7));
                    }
                    return currentPi;
                }
            };
        case 2:
            return {
                'info': 'Monte-Carlo Method',
                'compute': function () {
                    let N = 10000;
                    let s = 0;
                    for (let i = 0; i < N; i++) {
                        let x = Math.random();
                        let y = Math.random();
                        if (x * x + y * y <= 1) {
                            s++;
                        }
                    }

                    currentPi = 4 * s / N;
                    return currentPi;
                }
            };

        case 3:
            return {
                'info': 'Vieta\'s formula',
                'compute': function () {
                    currentPi = 2;
                    let m = 0;
                    for (let i = 0; i < 10; i++) {
                        m = Math.sqrt(m + 2);
                        currentPi *= 2 / m;
                    }
                    return currentPi;
                }
            };


    }
}

method1 = getPi(1);
method2 = getPi(2);
method3 = getPi(3);

print(method1());
print(method2());
print(method3());

print(method1.compute());
print(method2.compute());
print(method3.compute());

function print(x) {
    if (x instanceof Object && x.info) {
        console.log(x.info);
    } else {
        console.log(x);
    }
}