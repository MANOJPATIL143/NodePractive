import express from 'express';
const app = express();
const Port = 5000;

const billniears = [
    { id:1, name: "Manoj Patil", age:24 },
    { id:2, name: "kaka Patil", age:25 },
    { id:3, name: "mama Patil", age:55 },
    { id:4, name: "baba Patil", age:79 },
    { id:5, name: "dada Patil", age:87 },
]

app.use(express.json());

app.get('/displayAll', (req, res) => {
    res.send(billniears);
})

app.get('/displayOne/:id', (req, res) =>{
    let billniearss_id = req.params.id; 
    // console.log(billniearss_id);
    const billlniears = billniears.filter((value) => value.id == billniearss_id);
   if(billlniears.length == 0){
    res.send('no data found')
   }
    res.send(billlniears[0]);
    console.log(billlniears);
})

app.post('/addBillinior', (req, res) =>{
    const {name, age} = req.body;
    let billniearss_id = billniears.length = 1;
    billniears.push({id: billniearss_id, name, age});
    res.send(billniears);
})

app.put('/updateBillinir/:id', (req, res) =>{
    const {name, age} = req .body;
    billniears.forEach((value) =>{
        if(value.id == id){
            value.name = name;
            value.id = age;
        }
    })
})

app.listen(Port, () =>{
    console.log('app is running on', Port ); 
})