var request = require("request");
var fs = require("fs");
var zlib = require("zlib");

var s = request("http://www.pluralsight.com/").pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));

//s.pipe(fs.createWriteStream('pluralsight.html'));
