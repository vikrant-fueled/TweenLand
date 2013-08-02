function _initialize(){
	$('#hello').html("Hello from Tweenland!");


	var _InputFILE = 'tweens600.txt';

	var _TweenARRAY = new Array();
	var _TweenARRAY = loadFileIntoArray(_InputFILE);

	// console.log(_TweenARRAY);

	var _EDGES = new Array();
	_EDGES = _getEDGES(_TweenARRAY);

	_Sort(_EDGES, "size");
	var MST = _getMST(_EDGES,"prims");

	// console.log(MST);

	// BFS = _BFS(MST);
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

function _getEDGES(_ARRAY)
{
	var _EDGES = new Array();
	for(var i=0; i<_ARRAY.length; i++)
	{
		var _PartA = new Array();
		_PartA = _ARRAY[i];
		for(var j=0; j<_ARRAY.length; j++)
		{
			var _EDGE = new Object();
			var _PartB = new Array();
			_PartB = _ARRAY[j];

			_DIFF = (compareArrays(_PartA, _PartB, false)).length;

			if(_DIFF/6 >= 15 && _DIFF/6 <= 25)
			{
				_EDGE.size = _DIFF;
				_EDGE.links = [i,j];
				_EDGES.push(_EDGE);
			}
		}
		// if((i+1)%50 == 0)
		// console.log((i+1)+" Done...");
	}
	return _EDGES;
}

function _Sort(_OBJECT, _PARAMETER)
{
	_OBJECT.sort(function (a, b){
		return (b[_PARAMETER] - a[_PARAMETER]);
	});
}

function _getMST(_EDGES, _ALGO)
{
	var MST = new Array();
	var GROUPS = new Array();
	var last = _EDGES.length - 1;
	var count = 0;
	var loop = false;
	// console.log(_EDGES);

	for(var i=last; i>=1190; i--)
	{
			console.log(GROUPS);	
		var TEMP = _EDGES[i];
		if(count === 0)
		{
			GROUPS[0] = copyArray(TEMP.links);
			MST.push(TEMP);
			count++;
		}
		else
		{
			loop = false;
			// console.log("count="+count);
			var TEMP2 = copyArray(GROUPS[count-1]);
			if(TEMP2.indexOf(TEMP.links[0]) > -1 && TEMP2.indexOf(TEMP.links[1]) > -1)
				loop = true;

			
			if(!loop)
			{
				MST.push(TEMP);
				// TEMP2.push(TEMP.links[0], TEMP.links[1]);
				GROUPS.push([TEMP.links[0],TEMP.links[1]]);
				count++;
			}
			// else
				// console.log("loop found");
		}
	}
	// console.log(MST);

	// var MSTArray = new Array(600);
	// for(var i=0; i<MSTArray.length; i++)
	// 	MSTArray[i] = new Array(600);

	// for(var i=0; i<MST.length; i++)
	// {
	// 	MSTArray[MST[i].links[0]][MST[i].links[1]] = MST[i].size;
	// 	MSTArray[MST[i].links[1]][MST[i].links[0]] = MST[i].size;
	// }

	// return MSTArray;
}

function _BFS(MSTArray, StartNODE){
	if(!StartNODE)
		var StartNODE = 0;

	var Q = new Array();

	Q.push(StartNODE);
	var qpos = 0;
	var links = new Array();

	while(qpos<Q.length)
	{
		for(var i=0; i<600; i++)
		{
			if(MSTArray[Q[qpos]][i])
			{
				if(Q.indexOf(i) == -1)
				Q.push(i);
			}
		}
	qpos++;
	}
	console.log(Q.length);
	console.log(qpos);
	console.log(Q);
}
