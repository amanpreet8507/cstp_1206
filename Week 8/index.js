//Crete our own server using node.js
// We need to have a module called as HTTP


const http = require('http'); //HTTP module is pre-installed in node.js
const { url } = require('inspector');
const PORT = 2000;
const server = http.createServer((request, response) => {
    console.log(request.url);
    //We have to tell the response is of some type text/html
    response.setHeader('Content-type', 'text/html');

    if(request.url === '/flower')
    {
        response.write('<img width = "400" src ="https://plus.unsplash.com/premium_photo-1673529873151-31306ec72ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60">')
    }
    else if (request.url === '/home')
    {
        response.write('<img src = "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60">')
    }
    else{
        response.write("<h1 style = 'color: red'>Thankyou for using my server!");
    }


    //What data you want to send to the client/browser
    //response.write("<h1 style = 'color: red'>Thankyou for using my server!");

    //End my response
    response.end();
})

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})