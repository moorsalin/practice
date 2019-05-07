function PrimeTime(num) {
    for (var i = num - 1; (i > 1) && (i < num); i--) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function RunLength(str) { 
	var counts = '';
	var local = 1;
	for (var i = 0; i < str.length; i++) {
		if (str[i] === str[i+1]) {
			local +=1;
		}
		if (str[i] != str[i+1]) {
			var j = local+str[i];
			counts += j;
			local = 1;
		}
	}
	return counts;
}

function PrimeMover(num) { 
    // range 1 - 10**4
    // how do you check if a number is prime?
    // check if its divisible by numbers less than it
    // code goes here
    // in other words generate the numth prime numbers
    function PrimeTime(num) {
        for (var i = num - 1; (i > 1) && (i < num); i--) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    var primes = [];
    var count = 2;
    while (primes.length != num) {
        if (PrimeTime(count)) {
            primes.push(count);
        }
        count += 1;
    }
    return primes.pop();
}

function PalindromeTwo(str) { 
    // code goes here 
    //clean the str of non letters
    var letters = str.match(/[A-Za-z]/g); var out = [];
    for (var i = letters.length -1; i > -1; i--) {
        out.push(letters[i]);    
    }
    out = out.join('');
    if (out.toLowerCase() === letters.join('').toLowerCase()) {
        return true;
    }
    return false;         
}

function Division(num1,num2) { 
    var large,small;
    if (num1 > num2) { large = num1;small = num2;}
    else {large = num2; small = num1;}
    var factors = [];
    for (var i = 0; i <= small; i++) {
        if (large % i == 0 && small % i == 0) {
            factors.push(i);
        }
    }
    return factors.pop(); 
}

function StringScramble(str1,str2) {  
    for(var i = 0; i < str2.length; i++) {
        var target = str1.indexOf(str2.charAt(i));
        if (target < 0) {
            return false;
        }
        var front = str1.slice(0,target);
        var back = str1.slice(target+1,str1.length);
        str1 = front.concat(back);
        console.log(front,back,str1);
    }
    return true;
}
