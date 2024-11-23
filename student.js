const express = require("express")

const app = new express()
app.use(express.json());

const dbArray = [
    { ID: 100,name: "Tiya", age: 20, Dept: "CS"},
    { ID: 100,name: "Miya", age: 18, Dept: "Phy"},
    { ID: 100,name: "Riya", age: 19, Dept: "Mech"},
    { ID: 100,name: "Piya", age: 17, Dept: "Bio"},
    { ID: 100,name: "Jiya", age: 18, Dept: "Civil"},
];


app.get('/',(req,res)=>{
    res.send("Message from the server")
})
app.get('/view',(req,res)=>{
    res.send(dbArray)
})
app.put('/edit',(req,res)=>{
    dbArray.splice(1, 1, req.body)
    res.send("Updated successfully!")
})
app.post('/add',(req,res)=>{
    console.log(req.body)
    dbArray.push(req.body)
    res.send("Data added")
})
app.delete('/remove',(req,res)=>{
    dbArray.pop();
    res.send("Deleted successfully!")
})


app.listen(8080,()=>{
    console.log("Port is running")
})