const express = require('express');
const app = express();
const RouterCategory = require('./routes/categoryRouter');
const RouterProduct = require('./routes/productRouter');
app.use(express.json());

app.get('/', (req,res)=>{
    console.log('Get Response'); 
    res.send('API is running......');
}) 

app.use('/category', RouterCategory);
app.use('/product', RouterProduct);

app.listen(3002, () => {
    console.log(`The server is running on 3002`);   
});    


