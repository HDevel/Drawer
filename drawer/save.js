module.exports = function save(canvas, url) {
    var fs = this._fs,
        out,
        stream = canvas.pngStream(),
        path = url.split('/'),
        createUrl = '';

    path.slice(0,-1).forEach(function (v) {
        if(v || createUrl){
            createUrl += v + '/';
            try{
                fs.mkdirSync(createUrl);
            } catch(e){}
        }
    });

    out = fs.createWriteStream(url),

    stream.on('data', function (chunk) {
        out.write(chunk);
    });

    stream.on('end', function () {
        console.log(url + ' - saved!');
    });
};
