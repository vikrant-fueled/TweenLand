function _initialize(){
	$('#output').html("Hello from Tweenland!");


	var _InputFILE = 'tweens600.txt';

	var _TweenARRAY = new Array();
	var _TweenARRAY = loadFileIntoArray(_InputFILE);

	var _ChildARRAY = new Array();

	var _Result = new Array();

	var _Integers = new Array();
	_Integers = integerArray(_TweenARRAY.length);

	//SELECT A RANDOM TWEEN FROM SAMPLE SPACE AND ASSUME ITS THE SUPREME PARENT

	

	var _CurrentPARENT = Math.floor(Math.random() * _TweenARRAY.length);
	var _CHILD = _CreateCLONE(_TweenARRAY[_CurrentPARENT]);

	var _LOCATION = _TweenARRAY.indexOf(_CHILD);

	console.log(_LOCATION);
}


function _CreateCLONE(_PARENT){

	var _CHILD = new Array();
	var _PARENT = _PARENT.split('');

	var _LENGTH = _PARENT.length;

	for (var i = 0; i < _LENGTH; i++) {

		if(Math.random() <= 0.8)
		_CHILD[i] = _PARENT[i];
		else
		_CHILD[i] = (1 - _PARENT[i]).toString();
	}

	var _CLONE = _CHILD.join('');

	return _CLONE;
}