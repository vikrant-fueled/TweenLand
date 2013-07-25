function _initialize(){
	$('#output').html("Hello from Tweenland!");


	var _InputFILE = 'tweens600.txt';

	var _TweenARRAY = new Array();
	var _TweenARRAY = loadFileIntoArray(_InputFILE);

	var _Result = new Array();

	

	console.log(_TweenARRAY);
}