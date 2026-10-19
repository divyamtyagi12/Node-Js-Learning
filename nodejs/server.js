const http=require("http");
const server=http.createServer((req,res)=>{
  if(req.url==="/"){
    res.write("Gaming is the best siiuuuuuuuuuuuu");
  res.end();
  }
  else if(req.url==="/about")
  {
    res.write("I am a gamer");
    res.end();
  }
})
const PORT=3000;
server.listen(PORT,()=>
{
  console.log(`Server running on port:${PORT}`);
}
)