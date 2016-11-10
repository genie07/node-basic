
//number type
var intVar = 3;
var floatVar = 4.5;

//boolean type
var boolVar = true;
var boolVar2 = false;

//string type
var strVar = 'hello world';

//list type
var listVar = [];
var listVar2 = [1, 2, 3, 4, 5, 6];
var listVar3 = ['kim', 'lee', 'park', 'choi'];
var listVar4 = [
    {

    },
    {

    },
    {

    }
];

//object type
var objVar = {};
var objVar2 = {
    name: 'hong kildong',
    addr: 'seoul',
    age: 35,
    toString: function () {
        return this.name + ' ' + this.addr;
    }
};

var undefinedVar;
var notANumberVar = 'hello' * 5;

console.log(typeof intVar);
console.log(typeof boolVar);
console.log(typeof undefinedVar);
console.log(typeof notANumberVar);
console.log(notANumberVar);
console.log(objVar2.toString());
