const express = require('express');
const cors = require('cors')
const app = express();

require('dotenv').config();

app.use(cors('*'));
app.use(express.json());

const bookRouter = require('./routes/book.router');
const postRouter = require('./routes/post.router');

app.use('/api/v1/books', bookRouter);
app.use('/api/v1/posts', postRouter);

app.listen(process.env.PORT, () => console.log(`Server on running on port: ${process.env.PORT}`))
