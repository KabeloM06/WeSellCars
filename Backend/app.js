const express =require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello Kabelo');
}
)

app.listen(3000, ()=> {
    console.log('server is running on http://localhost:3000')
})