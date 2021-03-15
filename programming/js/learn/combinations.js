function ArrayAdditionI(arr) { 
    arr = arr.sort(function (a,b) {return a-b;});
    var largest = arr.pop();

    function sumAll (array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {sum += array[i];}
        return sum;
    }

    function combinations(set) {
        return (
                function acc(xs, set) {
                    var x = xs[0];
                    if(typeof x === "undefined") {return set;}
                    for(var i = 0, l = set.length; i < l; ++i) {
                        set.push(set[i].concat(x));
                    }
                    return acc(xs.slice(1), set);
                }
                )
        
        (set, [[]]).slice(1);
    };

    // this should take combinations of 
    // first element + each of the next
    // followed by the first two elements + each of the next
    // and checks if their sums === largest number
    var test = combinations(arr);
    for (var i = 0; i < test.length; i++) {
        if (sumAll(test[i]) === largest) {return "true";}
    }
    return "false";         
}
