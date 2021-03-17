var http = require("http");
var fs = require("fs");
var path = require("path");

const PORT = process.env.PORT || 5000;

http.createServer((req,res)=>{
    if(req.url.includes('openCTI')){
        console.log('file path is '+path.join(__dirname,"CTFiles","sample_lightning.html"));
        fs.readFile(path.join(__dirname,"CTFiles","sample_lightning.html"),(err,content)=>{
            if(err){
                throw err;
            } else {
                console.log(content);
                res.writeHead(200,{"Content-Type":"text/html",'Access-Control-Allow-Origin': '*',"frame-src" : '*'});
                res.end(content);
            }
        });
        
    } else {
    res.write('writing someything');
    res.end('Ending'+req.url);}

}).listen(PORT,()=>{console.log('Listening on Port:'+PORT)});




