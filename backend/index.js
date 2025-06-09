// Basic Express setup
const express = require('express'); const app = express(); app.use(express.json());
const products = require('./routes/products'); const orders = require('./routes/orders');
app.use('/products', products); app.use('/order', orders); app.use('/orders', orders);
app.listen(process.env.PORT || 3000);