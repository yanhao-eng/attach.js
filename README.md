// define a attach object attach on a jquery object
var firstAt = attach($('#seletor'), action1);
		
// define a attach object attach on an Attach object
var secondAt = attach(firstAt, action2);
var thirdAt = attach($('#seletor'), action3);
		
// define a attach object attach on an array of Attach objects
var fourthAt = attach([secondAt, thirdAt], action4);

function action1( obj ) {
	alert('test1');
}

function action2() {
	alert('test2');
}
		
function action3() {
	alert('test3');
}
		
function action4() {
	alert('test4');
}