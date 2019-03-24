var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var str = file.toString();
var match = str.match(new RegExp(/\n/gm));
"length" in match ? console.log(match.length) : 0;
