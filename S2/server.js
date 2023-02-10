var http = require('http');
var url = require('url');
var querystring=require('querystring');


var server =http.createServer(function(req,res){

var params = querystring.parse(url.parse(req.url).query);
res.writeHead(200,{"Content-Type":"text/plain"});
if ('id' in params && 'login' in params ) {



    res.write('id est'+params['id'] + 'login est'+params['login']);
} else {


    res.write('veuillez saisir id et login !');
}

res.end();

});
server.listen(1111);