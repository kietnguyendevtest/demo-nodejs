const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

const bookRouter = require('./routes/book.router');
const postRouter = require('./routes/post.router');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/v1/books', bookRouter);
app.use('/api/v1/posts', postRouter);

app.listen(process.env.PORT, () => console.log(`Server on running on port: ${process.env.PORT}`))
