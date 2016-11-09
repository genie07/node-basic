
function hello() {
    console.log('hello world');
}

function hello2() {
    return 'hello world';
}

function add(a, b) {
    return a + b;
}

var sub = function (a, b) {
    return a - b;
};


//callback1
function hello( message, callback ) {
    message = message + ". 자바 스크립트 입니다.";
    callback();
    return message;
}

var callbackFunction = function() {
    console.log( "콜백 함수가 실행되었습니다." );
};

var helloMessage = hello( "반갑습니다", callbackFunction );
console.log( helloMessage );


//callback2
function hello( message, callback ) {
    message = message + ". 자바 스크립트 입니다.";
    message = callback( message );
    return message;
}

var callbackFunction = function( message ) {
    message = message + " 콜백에서 수정함.";
    return message;
};

var helloMessage = hello( "반갑습니다", callbackFunction );
console.log( helloMessage );

