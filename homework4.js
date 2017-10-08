function triangleStars(h){
	function retNChars(n, char){
		res = "";
		function rec(n){
			if(n === 0) return;
			res += char;
			rec(n-1);
		}
		rec(n);
		return res;
	}
	function printLine(h, i){
		res = "";
		res += retNChars(i, " ");
		res += retNChars((h-1) * 2 + 1, "*");
		console.log(res);
	}
	(function triangleStarsRec(h, i){
		if(h === 0) return;
		printLine(h, i);
		triangleStarsRec(h-1, i+1);	
	})(h, 0);
}

function pow(base, n){
	if(n === 1) return base;
	return base * pow(base, n-1); 
}
function reverse(str){
	function reverseUntill(str, i){
		if(i === 0) return str[0];
		return str[i] + reverseUntill(str, i - 1);
	}
	return reverseUntill(str, str.length - 1);
}

function checkboard(n){
	function retNCharsWithSpace(n, char){
		res = "";
		function rec(n){
			if(n === 0) return;
			res += char + " ";
			rec(n-1);
		}
		rec(n);
		return res;
	}
	function printLine(n){
		console.log(retNCharsWithSpace(n, "*"));
	}

	function printLineSpaced(n){
		console.log(" " + retNCharsWithSpace(n, "*"));
	}
	(function checkboardRec(n, i){
		if(i === n) return;
		if(i%2 !== 0) 
			printLineSpaced(n);
		else
			printLine(n);
		checkboardRec(n, i + 1);	
	})(n, 0);
}
checkboard(5);
console.log(reverse("davit asryan"));
console.log(pow(2,3));
triangleStars(6);