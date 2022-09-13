const express = require ('express');
const app = express();

app.get('/', (req, res, next) =>{
	res.send(" This is Main Page !")
})

const port = "3000";
app.listen( port, ()=>{
  console.log(`Node Js Server is running on the port : ${port}`);  
});


