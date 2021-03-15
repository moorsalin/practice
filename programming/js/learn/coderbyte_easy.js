function FirstReverse(str) { 
    // returns reverse string str
    const len = str.length - 1;
    var test = '';
    for (var x = len; x >= 0; x--) {
        test += str.charAt(x);
    }
    return test;
}

function FirstFactorial(num) {
    // returns factorial of num
    var prod = 1;
    if (num <= 0) {return 0;}
    for (var x = num; x > 0; x--) {
        prod *= x;
    }
    return prod;
}

function LetterChanges(str) {
    // takes str, shifts letter right i.e. a=>b; f=>g
    // then it capitalizes all vowels 
    var modStr = "";
    //shift letters right, use key code
    //z = 122; a = 97
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        if (char >= 97 && char <= 122) {
            if (char == 122) {char = 97;}
            else {char += 1;}
        }

        modStr += String.fromCharCode(char);
    }
    // capitalize vowels
    modStr = modStr.replace(new RegExp('[aeiou]','gm'), function (match) {return match.toUpperCase()});
    return modStr;
}

function SimpleAdding(num) {
    // returns sum of numbers from 1 to num
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;         
}

function LongestWord(sen) { 
    // using regexps again
    var big;
    var wordList = sen.match(new RegExp('[\\w\\d]+','gm'));
    for (var i = 0; i < wordList.length; i++) {
        if (wordList[i].length > big.length) {
            big = wordList[i];
        }
    }
    return big; 
}

function LetterCapitalize(str) { 
    //rip lsit of words, and just capitalize each first letter
    var wordList = str.match(new RegExp('\\w+','g'));
    var newWord;
    for (var i = 0; i < wordList.length; i++) {
        var word = wordList[i];
        word = word[0].toUpperCase() + word.substring(1,word.length);
        newWord += word + ' ';
    }
    return newWord; 
}

function SimpleSymbols(str) { 
    str = "="+str+"=";
    var matches = str.match(new RegExp(".[A-Za-z].","gm"));
    for (var m = 0; m < matches.length; m++){
        var g = matches[m].match(new RegExp("\\+[A-Za-z]\\+","gm"));
        if (g == null) {
            return "false";
        }
    }
    return "true";
}

function CheckNums(num1,num2) { 
    if(num2 === num1){return -1;}
    return (num2 > num1);
}

function TimeConvert(num) { 
    var minutes = num % 60;
    var hour = Math.floor(num / 60);  
    return hour+":"+minutes; 
}

function AlphabetSoup(str) { 
    str = str.split("");
    str = str.sort();
    str = str.join("");
    return str;
}

function ABCheck(str) { 
    var match = str.match(new RegExp(/a.{3}b|b.{3}a/));
    return !(match === null) ; 
}

function VowelCount(str) { 
    var match = str.match(new RegExp(/[aeiou]/gm));
    return match === null? 0:match.length; 
}

function WordCount(str) { 
    var match = str.match(new RegExp(/\S+/g)); 
    return "length" in match? match.length : 0; 
}

function ExOh(str) { 
    var x = str.match(new RegExp(/x/gm));
    x ? x = x.length : x = 0;
    var o = str.match(new RegExp(/o/gm));
    o ? o = o.length : o = 0;
    return x === o;
}

function Palindrome(str) { 
    var r = str.split('').reverse().join('');
    return str === r; 
}

function ArithGeo(arr) { 
    var arith = []; var geo = [];
    for (var i = 1; i < arr.length; i++) {
        arith.push(arr[i] - arr[i-1]);
        geo.push(arr[i]/arr[i-1]);
    }
    // if arith elements all the same, returhn Arithmetic, 
    // else geo elements all the same, return Geometric
    // else return -1
    var arith_sames = 0;
    var geo_sames = 0;
    for (var i = 0; i < arith.length; i++) {
        if (arith[i] === arith[i+1]) {
            arith_sames += 1;
        }
        if (geo[i] === geo[i+1]) {
            geo_sames += 1;
        }
    }

    if (arith_sames === arith.length - 1) {return "Arithmetic";}
    if (geo_sames === geo.length - 1) {return "Geometric";}
    return -1; 
}

function ArrayAdditionI(arr) { 
    arr = arr.sort(function (a,b) {return a-b;});
    var largest = arr.pop();

    function sumAll (array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {sum += array[i];}
        return sum;
    }

    var combinations = function(set) {
        return (function acc(xs, set) {
            var x = xs[0];
            if(typeof x === "undefined")
                return set;
            for(var i = 0, l = set.length; i < l; ++i)
                set.push(set[i].concat(x));
            return acc(xs.slice(1), set);
        })(set, [[]]).slice(1);
    };

    var test = combinations(arr);
    for (var i = 0; i < test.length; i++) {
        if (sumAll(test[i]) === largest) {return "true";}
    }
    return "false";         
}

function LetterCountI(str) { 
    var count = function (word) {
        var most_repeated_letter = null; var letter_reps = 1;
        for (var i in word) {
            var letter = word[i];
            var r = 0;
            for (var j in word) {
                var compare = word[j];
                if (compare === letter) {r+=1;}
            }
            if (r > letter_reps) {letter_reps = r; most_repeated_letter = letter;}
        }
        if (most_repeated_letter === null) {return null;}
        return letter_reps;
    }

    // code goes here
    var words = str.match(/\w+/g);
    var length = 0; var word_with_most_letter_reps = -1;
    for (var i in words) {
        var word = words[i];
        var c = count(word);
        if (c != null) {
            if (c > length) {
                length = c;
                word_with_most_letter_reps = word;
            }
        }
    }
    return word_with_most_letter_reps;    
}

function SecondGreatLow(arr) {
    arr.sort(function (a,b) {return a > b;});
    var smallest = arr[0]; var largest = arr[arr.length - 1];
    var second_smallest = smallest; var second_largest = largest;
    for (var i in arr) {
        if (smallest < arr[i]) {
            second_smallest = arr[i]; //console.log(second_smallest);
            break;
        }
    }
    arr = arr.reverse();
    for (var i in arr) {
        if (largest > arr[i]) { 
            second_largest = arr[i]; //console.log(second_largest); 
            break;
        }
    }
    return (second_smallest+' '+second_largest);
}

function DivisionStringified(num1,num2) { 
    var div = (Math.round(num1 / num2)).toString().split('').reverse();
    var count = 0; var string = '';
    for (var i in div) {
        count += 1;
        string += div[i];
        if (count === 3) {
            string += ',';
            count = 0;
        }
    }
    return string.split('').reverse().join('');
}

function CountingMinutesI(str) {
    var times = str.match(/\d+:\d+[ap]m/g);
    var first_time = times[0]; var second_time = times[1];
    var first_meridian = first_time.match(/[ap]m/g)[0];
    var second_meridian = second_time.match(/[ap]m/g)[0];
    // if you convert to military time, it becomes very easy
    var conv = function (time) {
        var t = time.match(/\d+/g);
        var hours = t[0]; var minutes = t[1];
        var total_time = Number(hours * 60) + Number(minutes);
        //var mornOrAft = time.match(/[ap]m/g);
        //if (mornOrAft === 'pm') {total_time + (12 * 60);}
        return total_time;
    }
    var time = conv(first_time) - conv(second_time);
    if (first_meridian === second_meridian) {
        if (time > 0) {time = (24*60) - time;}
        else {time = time * -1;}
    }
    else {
        time = (12*60) - time;        
    }
    return time;     
}

function MeanMode(arr) { 
    var mean = function(arr){
        var sum = 0;
        for (var i in arr) {sum += arr[i]}
        return (sum / arr.length) ;
    }
    var mode = function(arr){
        var c = 1; var mode = null;
        for (var i in arr) {
            var count = 0;
            for (var j in arr) {if (arr[j] == arr[i]) {count +=1;}}
            if (count > c) {c = count; mode = arr[i];}
        }
        return mode;
    }
    return (mode(arr) === mean(arr) ? 1 : 0);
}

function DashInsert(str) { 
    str = str.split('');
    var word = '';
    var isOdd = function (num) {return !(num % 2 === 0);}
    for (var i = 0; i < str.length - 1; i++) {
        word += str[i];
        var num = Number(str[i]); //console.log(num);
        var next = Number(str[i+1]); //console.log(next);
        if (isOdd(num) && isOdd(next)) {word += '-';}   
    }
    word += str[str.length - 1];
    return word;
}

function SwapCase(str) {
    // upper case char range 65-90
    // lower case char range 97-122
    var s = '';
    for (var i = 0; i < str.length; i++) {
        if ((65 <= str.charCodeAt(i)) && (str.charCodeAt(i) <= 90)) {
            s += str.charAt(i).toLowerCase();
        }
        else if ((97 <= str.charCodeAt(i)) && (str.charCodeAt(i) <= 122))  {
            s += str.charAt(i).toUpperCase();
        }
        else {
            s += str.charAt(i);
        }
    }
    return s; 
}

function NumberAddition(str) { 
    var nums = str.match(/\d+/g);
    var sum = 0;
    for (var i in nums) {
        sum += Number(nums[i]);
    }
    return sum; 

}

function ThirdGreatest(strArr) { 
    strArr = strArr.sort(function (a,b) {return a.length < b.length;});

    return strArr[2]; 

}

function PowersofTwo(num) { 
    var pow = Math.log(num) / Math.log(2);
    return pow === parseInt(pow); 

}

function AdditivePersistence(num) {
    var sumNums = function(num){
        var sum=0; var num = num.toString();
        for(var i in num){
            sum+= Number(num[i])
        } 
        return sum
    };
    var count = 0;
    while (num > 9) {
        num = sumNums(num);
        count +=1;
    }
    return count; 

}

function MultiplicativePersistence(num) {
    var productNum = function (num) {
        num = num.toString(); var product = 1;
        for (var i in num) {
            product *= Number(num[i]);
        }
        return product;
    }
    var count = 0;
    while (num > 9) {
        num = productNum(num);
        count += 1;
        if (num === 0) {break;}
    }
    return count;
}

function OffLineMinimum(strArr) { 
    var nums = []; var mins = [];
    for (var i in strArr) {
        if (strArr[i] === 'E') {
            nums.sort(function (a,b) {return a < b});
            mins.push(nums.pop());
        }
        else {
            nums.push(strArr[i]);
        }
    }
    return mins.toString(); 
}
