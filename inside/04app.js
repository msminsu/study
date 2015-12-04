/**
 * 함수 선언문
 */
// function add(x, y) {
// 	return x + y;
// }
// console.log(add(3, 4));

/**
 * 함수 표현식
 * 식은 값을 가진다.
 * 함수는 객체 이다. 따라서 add 변수는 참조 값을 가지고 있다.
 */
//var add = function (x, y) {
//	return x + y;
//};
//var plus = add;
//
//console.log(add(3, 4));
//console.log(plus(5, 6));

/**
 * 기명함수 표현식
 */
//var add = function sum(x, y) {
//	//sum(3, 4);
//
//	return x + y;
//};
//
//console.log(add(3, 4));

/**
 * 팩토리얼함수
 */
//var factorialVar = function factorial(n) {
//	if (n <= 1) {
//		return;
//	}
//	return n * factorial(n - 1);
//};
//
//console.log(factorialVar(3));
//console.log(factorial(3));

/**
 * 팩토리얼함수
 */
//var factorialVar = function factorial(n) {
//	if (n <= 1) {
//		return;
//	}
//	return n * factorial(n - 1);
//};
//
//console.log(factorialVar(3));
//console.log(factorial(3));

/**
 * 호이스팅
 */
//add(2, 3);
//function add(x, y) {
//	return x + y;
//}
//add(3, 4);
//
//
//add(2, 3);
//var add = function (x, y) {
//	return x + y;
//};
//add(3, 4);

//////////////////////////////////////////////////////////////////////////

/**
 * 함수도 객체다
 */
/*function add(x, y) {
	return x + y;
}

add.result = add(2, 3);
add.status = 'OK';

console.log(add.result);
console.log(add['result']);
console.log(add.status);
console.log(add['status']);*/

/**
 * 변수나 프로퍼티의 값으로 할당
 */
/*//foo 변수에 숫자 100을 할당
var foo = 100;

//호출시 변수에 리턴값을 할당
var bar = function () {
	return 100;
};
console.log(bar());

//obj.baz 메소드 호출시 리턴값을 할당
var obj = {};
obj.baz = function () {
	return 200;
};
console.log(obj.baz());*/

/**
 * 함수를 다른 함수의 인자로 넘김
 */
/*var foo = function (func) {
	func();
};

foo(function () {
	console.log('함수는 argument로 사용 가능');
});*/

/**
 * 리턴값으로 활용
 */
//var foo = function () {
//	return function () {
//		console.log('리턴값으로 함수를 반환');
//	};
//};
//
//var bar = foo();
//
////var bar = function () {
////	console.log('리턴값으로 함수를 반환');
////}
//
//bar();

/**
 * 함수 객체의 기본 프로퍼티
 */
/*function add(x, y) {

	console.log(add.caller);

	return x + y;
}

add(2, 3);

console.dir(add);*/

/**
 * length
 */
/*function func0() {
}

function func1(x) {
	return x;
}

function func2(x, y) {
	return x + y;
}

function func3(x, y, z) {
	return x + y + z;
}

console.log('func0.length', func0.length);
console.log('func1.length', func1.length);
console.log('func2.length', func2.length);
console.log('func3.length', func3.length);*/

/**
 * prototype 과 constructor
 * 모든객체는 프로토타입 객체을 소유하고 있음, 함수도 객체이기 때문에 프로토타입 객체를 가지고 있음
 */
/*function myFunction() {
	return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);*/

/**
 * 이벤트 핸들러
 */
/*window.onload = function () {
	alert('This is the callback function');
};*/

/**
 * 즉시 실행함수
 * 다른함수 호출과 동일하게 인자를 넘길수 있다.
 * 즉시 실행함수의 이점 - 최초 한번만 실행되는 초기화 코드시 사용, 함수유효범위를 통한 변수 충돌방지
 *
 */
/*(function (name) {
	console.log('This is the immediate function ' + name);
}('foo'));*/

/**
 * 내부함수  생명주기 , 스코프, 
 */
//function parent() {
//	var a = 100;
//	var b = 200;
//
//	function child() {
//		var b = 300;
//		console.log(a);
//		console.log(b);
//	}
//
//	child();
//}
//
//parent();
//child();

/**
 * 외부에서 내부를 호출, 클로저    가비지 컬렉터 - 
 */
/*function parent() {
	var a = 100;
	var child = function () {
		console.log(a);
	};

	return child;
}

var inner = parent();
inner();*/

/**
 * 렉시컬
 * 함수 실행 시 유효범위를 함수 실행 환경이 아닌 함수 정의 환경으로 참조하는 특성
 */
/*function f1() {
	var a = 10;
	f2();
}

function f2() {
	return a;
}

f1();*/

/**
 * 실행문맥
 * 콜 스택에 쌓임
 */
//console.log("전역 컨텍스트 입니다");
//
//function Func1() {
//	console.log("첫 번째 함수입니다.");
//}
//
//function Func2() {
//	Func1();
//	console.log("두 번째 함수입니다.");
//}
//
//Func2();

/**
 * 자신을 재정의 하는 함수
 */
//var self = function () {
//	console.log('a');
//	return function () {
//		console.log('b');
//	};
//};
//
//self = self();
//self();

/**
 * 인자와 인수의 갯수가 맞지 않아도 함수 호출이 가능
 */
//(function () {
//	function func(arg1, arg2) {
//		console.log(arg1, arg2);
//	}
//
//	func();
//	func(1);
//	func(1, 2);
//	func(1, 2, 3);
//}());

/**
 * argument 객체
 */
//function add(a,b) {
//	console.dir(arguments);
//	return a+b;
//}
//
//console.log(add(1));
//console.log(add(1,2));
//console.log(add(1,2,3));

/**
 * argument 객체 활용예
 */
//function sum() {
//	var result = 0;
//
//	for (var i = 0; i < arguments.length; i++) {
//		result += arguments[i]
//	}
//
//	return result;
//}
//
//console.log(sum(1, 2, 3));
//console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

/**
 * 객체의 메서드 호출시 this바인딩
 */
//var myObject = {
//	name: 'foo',
//	sayName: function () {
//		console.log(this.name);
//	}
//};
//
//var otherObject = {
//	name: 'bar'
//};
//
//otherObject.sayName = myObject.sayName;
//
//myObject.sayName();
//otherObject.sayName();

/**
 * 전역객체와 전역 변수와의 관계
 */
//(function () {
//	var foo = "i'm foo";
//	console.log(foo);
//	console.log(window.foo);
//}());
//
//var foo = "i'm foo";
//console.log(foo);
//console.log(window.foo);

/**
 * 함수 호출시 this바인딩
 */
//var test = 'This is test';
//console.log(window.test);
//
//var sayFoo = function () {
//	console.log(this.test);
//};
//sayFoo();
//
//(function () {
//	var sayFoo = function () {
//		console.log(this.test);
//	};
//	sayFoo();
//}());

/**
 * 내부함수의 this바인딩
 */
//var value = 100;
//
//var myObject = {
//	value: 1,
//	func1: function () {
//		this.value += 1;
//		console.log('func1() called this.value: ' + this.value);
//
//		var func2 = function () {
//			this.value += 1;
//			console.log('func2() called this.value: ' + this.value);
//
//			var func3 = function () {
//				this.value += 1;
//				console.log('func3() called this.value: ' + this.value);
//			};
//
//			func3();
//		};
//
//		func2();
//	}
//};
//myObject.func1();

/**
 * 내부함수에서 생기는 this바인딩 문제를 해결한 코드
 */
//var value = 100;
//
//var myObject = {
//	value: 1,
//	func1: function () {
//		var that = this;
//		this.value += 1;
//		console.log('func1() called this.value: ' + this.value);
//
//		var func2 = function () {
//			that.value += 1;
//			console.log('func2() called this.value: ' + that.value);
//
//			var func3 = function () {
//				that.value += 1;
//				console.log('func3() called this.value: ' + that.value);
//			};
//
//			func3();
//		};
//
//		func2();
//	}
//};
//myObject.func1();

/**
 * 생성자 함수의 this바인딩
 */
//var Person = function (name) {
//	this.name = name;
//};
//
//var foo = new Person('foo');
//console.log(foo.name);

/**
 * 객체생성의 두가지 패턴(리터럴, 생성자함수)
 */
//var foo = {
//	name: 'foo',
//	age: 35,
//	gender: 'man'
//};
//console.dir(foo);
//
//function Person(name, age, gender, position) {
//	this.name = name;
//	this.age = age;
//	this.gender = gender;
//}
//
//var bar = new Person('bar', 33, 'woman');
//console.dir(bar);
//
//var baz = new Person('baz', 25, 'woman');
//console.dir(baz);

/**
 * new를 붙이지 않고 생성자 함수 호출시 오류
 */
//function Person(name, age, gender, position) {
//	this.name = name;
//	this.age = age;
//	this.gender = gender;
//}
//
//var qux = Person('qux', 33, 'woman');
//console.log(qux);
//
//console.log(window.name);
//console.log(window.age);
//console.log(window.gender);

/**
 * new를 강제하는 패턴
 */
//function A(arg) {
//	if (!(this instanceof A)) {
//		return new A(arg);
//	}
//
//	this.value = arg ? arg : 0;
//}
//
//var a = new A(100);
//var b = A(10);
//
//console.log(a.value);
//console.log(b.value);
//console.log(global.value);

/**
 * apply 메서드를 이용한 명시적 바인딩
 */
//function Person(name, age, gender) {
//	this.name = name;
//	this.age = age;
//	this.gender = gender;
//}
//
//
//var foo = {};
//
//Person.apply(foo, ['foo', 20, 'man']);
//
//console.dir(foo);

/**
 * call 메서드를 이용한 명시적 바인딩
 */
//function Person(name, age, gender) {
//	this.name = name;
//	this.age = age;
//	this.gender = gender;
//}
//
//
//var foo = {};
//
//Person.call(foo, 'foo', 20, 'man');
//
//console.dir(foo);

/**
 * apply 메서드를 활용한 arguments 객체의 배열 표준 메서스 slice 활용 예제
 */
//function myFunction() {
//	console.dir(arguments);
//
//	//arguments.shift();
//
//	var args = Array.prototype.slice.apply(arguments);
//	//var args = Array.prototype.slice.apply(arguments,[0,2]);
//
//	console.dir(args);
//}
//
//myFunction(100, 2200, 3);

/**
 * slice() 메서드의 사용예
 */
//var arrA = [1, 2, 3];
//var arrB = arrA.slice(0);
//var arrC = arrA.slice();
//var arrD = arrA.slice(1);
//var arrE = arrA.slice(1, 2);
//
//console.log(arrA);
//console.log(arrB);
//console.log(arrC);
//console.log(arrD);
//console.log(arrE);

/**
 * 함수리턴
 */
////규칙1 - 리턴값이 없으면 undefined 값이 리턴된다.
//var noReturnFunc = function () {
//	console.log('This function has no return statement');
//};
//
//var result = noReturnFunc();
//console.log(result);

////규칙2 -생성자 함수의 리턴값에 객체를 명시하면 객체가 리턴된다.
//function Person(name, age, gender) {
//	this.name = name;
//	this.age = age;
//	this.gender = gender;
//
//	return {
//		name: 'bar',
//		age: 20,
//		gender: 'woman'
//	};
//}
//
//var foo = new Person('foo', 30, 'man');
//console.log(foo);

////규칙3 -생성자 함수의 리턴값에 객체가 아닌 불린, 숫자, 문자열을 명시하면 모두 무시하고 this가 리턴된다.
//function Person(name, age, gender) {
//	this.name = name;
//	this.age = age;
//	this.gender = gender;
//
//	return 100;
//}
//
//var foo = new Person('foo', 30, 'man');
//console.log(foo);

////규칙4 -생성자 함수의 리턴값이 없으면 this가 리턴된다.
//function Person(name, age, gender) {
//	this.name = name;
//	this.age = age;
//	this.gender = gender;
//}
//
//var foo = new Person('foo', 30, 'man');
//console.log(foo);