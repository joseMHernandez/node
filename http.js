const http  = require ('http')

const server = http.createServer( (req, res)=> {




if(req.url === '/'){
    res.write('<h1>hello world</h1>')
    res.end()
}else if(req.url === '/about'){

    res.write('this is about page')
    res.end()
}else{
    res.write('<a href="/">about page</a>')
    res.end()

}


})


server.listen(3000)