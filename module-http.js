const http = require('node:http');


//create server
const server = http.createServer((req, res)=>{
    console.log(req);
    if(req.url === '/'){ // check if home page
        res.write("hello from server for home");
        res.end();
    }
    else if(req.url === '/about') //check if about page
    {
        res.write("hello from server for about");
        res.end();
    }

});
server.listen(5414);