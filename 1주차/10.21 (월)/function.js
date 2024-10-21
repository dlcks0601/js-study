function foo(arg) {
    return arg;
}

function bar() {
    console.log('bar');
}

foo(bar)();

function fun(arg) {
    console.log(arguments);
}

fun(1, 2, 3, 4);

// 함수

const arrow1 = function () {
    console.log('foo4');
};

arrow1();

// 화살표 함수

const arrow2 = () => {
    console.log('foo4');
};

arrow2();
