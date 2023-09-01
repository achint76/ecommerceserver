const express = require('express');
const app = express();
const RouterCategory = require('./routes/categoryRouter');
const RouterProduct = require('./routes/productRouter');
const RouterUser = require('./routes/userRouter');
const RouterCart = require('./routes/cartRouter');
const RouterOrder = require('./routes/orderRouter');
const RouterOrderDetails = require('./routes/orderdetailsRouter');
app.use(express.json());

app.get('/', (req,res)=>{
    console.log('Get Response'); 
    res.send('API is running......');
}) 

app.use('/category', RouterCategory);
app.use('/product', RouterProduct);
app.use('/user', RouterUser);
app.use('/cart', RouterCart);
app.use('/order', RouterOrder);
app.use('/orderdetails', RouterOrderDetails);
app.listen(3002, () => {
    console.log(`The server is running on 3002`);   
});    


