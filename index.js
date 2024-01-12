const express = require('express');
const app = express();

app.use(express.json());

const bookRouter = require('./routes/book.router');

app.use('/api/v1/books', bookRouter);


app.listen(process.env.PORT, () => console.log(`Server on running on port: ${process.env.PORT}`))
