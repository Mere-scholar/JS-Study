(function  () {
	//  创建一个类 
	var n = "Mr Han";
	function People(name){
		this._name = name;
	}
	People.prototype.say = function(){
		alert("hello"+this._name);
	}
	//给外部公开接口
	window.People = People;
}());


(function  () {
	// 使用类  
	function Student(name){
		this._name = name;
	}
	Student.prototype = new People();// 扩展
	var superSsay = Student.prototype.say;//调用父类
	Student.prototype.say = function  () {
		superSsay.call(this);
		alert("stu-hello"+this._name);
	}
	window.Student = Student;
}());
		


var s = new Student("小明");
s.say();