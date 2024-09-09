const express = require ('express')
const path = require ('path')

const app = express();  
const port = 3000;  

app.use (express.static (path.join(_dirname,'Public')));  

 app.get ('/', (req, res)=>{
    res.sendFile(path.join(_dirname,'Public' ,'pagina.html'))  }); 

 app.get ('/sobre', (req,res)=>{
 res.sendFile(path.join(dirname,'Public','sobre.html'));  
});  

app.listen (port, ()=>{
 console.log('Servidor Rodando na em http://127.0.0.1:${port}'); 
});  
