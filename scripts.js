function _initialize(){
	$('#hello').html("Hello from Tweenland!");


	var _InputFILE = 'tweens600.txt';

	var _TweenARRAY = new Array();
	var _TweenARRAY = loadFileIntoArray(_InputFILE);

	// console.log(_TweenARRAY);

	var _ChildARRAY = new Array();

	var _Result = new Array();

	var _Integers = new Array();
	_Integers = integerArray(_TweenARRAY.length);

	// var _Relations = new Array();
	//_Relations = _CompareALL(_TweenARRAY);

	// console.log(_Relations);

	_CreateGRAPH(_Relations);
}


function _CreateCLONE(_PARENT){
	var _CHILD = new Array();
	var _PARENT = _PARENT.split('');

	var _LENGTH = _PARENT.length;

	for (var i = 0; i < _LENGTH; i++) {
		_PARENT[i] =  parseInt(_PARENT[i]);

		if(Math.random() <= 0.8)
		_CHILD[i] = _PARENT[i];
		else
		_CHILD[i] = 1 - _PARENT[i];
	}
	return _CLONE;
}

function _CompareALL(_ARRAY)
{
	var _RESULT = new Array();
	for(var i=0; i<_ARRAY.length; i++)
	{
		var _PartA = new Array();
		_PartA = _ARRAY[i];
		_KEYS = new Array();
		for(var j=i+1; j<_ARRAY.length; j++)
		{
			var _PartB = new Array();
			_PartB = _ARRAY[j];

			_DIFF = Math.round((compareArrays(_PartA, _PartB, false)).length/6);


			if(_DIFF >= 15 && _DIFF <= 25)
			{
				_KEYS.push(j);
			}
		}
		if(i%50 == 0)
		console.log(i+" Done...");
		_RESULT.push(_KEYS);
	}

	return _RESULT;
}

function _CreateGRAPH(_ARRAY){
	var _CANVAS = $('#output')[0];


	// Initaliase a 2-dimensional drawing context
	var ctx = _CANVAS.getContext('2d');
	var r = 20;
	var i = 2;
	ctx.beginPath();
	ctx.arc((i*r)+5,(j*r+5),r,0,2*Math.PI);
	ctx.stroke();
}