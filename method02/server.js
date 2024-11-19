const express = require ('express');
const app= express();

app.use((req,res)=>{
    console.log('request received');
    res.sendFile('./toDo.html');
})

app.listen(8000, () => {
    console.log('active listening on port 8000');
})