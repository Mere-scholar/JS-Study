(function  () {
	var userName = "Mr Han"
	function Person (name) {
		var _this = {}
		_this._name = name;
		_this.sayHello = function  () {
			alert("Hello"+this._name);
		}
		return _this;
	}
	window.Person = Person;
}());


(function  () {
	function Teacher (name) {
		var _this = Person(name);
		var surperSay = _this.sayHello;
		
		_this.sayHello = function  () {//重写父类
			surperSay.call(_this);
			alert("tHello"+this._name);
		}
		return _this;
	}
	window.Teacher = Teacher;
}());


var t = Teacher("小明");
t.sayHello();

