const express = require('express');
const app = express();

app.use(express.json());

const bookRouter = require('./routes/book.router');

app.use('/api/v1/books', bookRouter);





app.listen(5000, () => console.log("Server on running on port: 5000"))