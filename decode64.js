console.log("Test a base64 image and decoding it");
var fs = require('fs');
var img;
var imghead;

fs.readFile("data/Keep/image.html", function(err, cont) {
    if (err)
        throw err;

    var start = cont.indexOf("data:image/png;base64");
    var end;
    if ( start > 0 ) {
        console.log("String at pos "+ start);
        // search for end starting
        end = cont.indexOf("\"",start);
        console.log("String end at pos "+ end);
    }

    img = cont.toString().substring(start+22,end-1);
    let buf = new Buffer(img, 'base64')
    var stream = fs.createWriteStream("output/imgfile.png");

    stream.once('open', function(fd) {
        stream.write(buf);
        stream.end();
    });

    imghead = img.substring(0,22)
    var imgtail = img.substring(2908009-10,2908009)
    console.log("type:"+typeof img);
    console.log("String header:"+ imghead);
    console.log("String footer:"+ imgtail);
});


//
