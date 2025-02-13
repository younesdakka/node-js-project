const express = require("express")
const cors = require("cors");
const app = express()
app.use(cors());
app.use(express.json());

dataForm = []

app.get('/hello',(req,res)=>{
    res.json(dataForm)
})
app.post('/hello',(req,res)=>{
    console.log(req.body,'req.bodyreq.bodyreq.body');
    const newItem = {
        id: Math.floor(Math.random() * 1000000),
        ...req.body 
    };
    dataForm.push(newItem);
    res.json({ message: "تم تخزين البيانات بنجاح", data: req.body });

})
app.delete('/hello',(req,res)=>{
    const { id } = req.body;
    const initialLength = dataForm.length;
    dataForm = dataForm.filter(item => item.id !== id);
    if (dataForm.length < initialLength) {
        res.json({ message: `تم حذف العنصر الذي يحمل id ${id}`, data: dataForm });
    } else {
        res.status(404).json({ error: " غير موجود" });
    }

})
app.put('/hello',(req,res)=>{
    res.send('hello ')
})
app.get('/',(req,res)=>{
    res.send('hello saleh')
})



app.listen(3000,()=>{
    console.log('I am listen for you --------');
    
})