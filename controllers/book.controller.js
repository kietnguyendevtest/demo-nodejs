const postgre = require('../database')

const bookController = {
    getAll: async(req, res) => {
        try {
            const sql = 'SELECT * FROM books';
            const {rows} = await postgre.query(sql);

            res.json({msg: "OK", data: rows});

        } catch (error) {
            res.json({msg: error.msg});
        }
    },
    getById: async(req, res) => {
        try {
            const book_id = req.params.id;
            const sql = 'SELECT * FROM books WHERE book_id = $1';
            const {rows} = await postgre.query(sql, [book_id]);

            if (rows[0]) {
                return res.json({msg: "OK", data: rows});
            }

            res.status(404).json({msg: "Not found"});
            
        } catch (error) {
            res.json({msg: error.msg});
        }
    },
    insert: async(req, res) => {
        try {
            const {book_name, book_price} = req.body;
            const sql = 'INSERT INTO books(book_name, book_price) VALUES($1, $2) RETURNING *';
            const {rows} = await postgre.query(sql, [book_name, book_price]);

            res.json({msg: "OK", data: rows[0]});

        } catch (error) {
            res.json({msg: error.msg});
        }
    },
    update: async(req, res) => {
        try {
            const book_id = req.params.id;
            const {book_name, book_price} = req.body;
            const sql = 'UPDATE books SET book_name = $2, book_price = $3 WHERE book_id = $1 RETURNING *';
            const {rows} = await postgre.query(sql, [book_id, book_name, book_price]);

            res.json({msg: "OK", data: rows[0]});

        } catch (error) {
            res.json({msg: error.msg});
        }
    },
    delete: async(req, res) => {
        try {
            const book_id = req.params.id;
            const sql = 'DELETE books WHERE book_id = $1 RETURNING *';
            const {rows} = await postgre.query(sql, [book_id]);

            res.json({msg: "OK", data: rows[0]});

            if (rows[0]) {
                return res.json({msg: "OK", data: rows[0]})
            }

            return res.status(404).json({msg: "Not found"})

        } catch (error) {
            res.json({msg: error.msg});
        }
    }
}

module.exports = bookController