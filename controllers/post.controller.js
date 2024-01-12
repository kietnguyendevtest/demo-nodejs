const postgre = require('../database')

const postController = {
    getAll: async(req, res) => {
        try {
            const sql = 'SELECT * FROM posts';
            const {rows} = await postgre.query(sql);

            return res.json({msg: "OK", data: rows});

        } catch (error) {
            return res.json({msg: error.msg});
        }
    },
    getById: async(req, res) => {
        try {
            const id = req.params.id;
            const sql = 'SELECT * FROM posts WHERE id = $1';
            const {rows} = await postgre.query(sql, [id]);

            if (rows[0]) {
                return res.json({msg: "OK", data: rows});
            }

            return res.status(404).json({msg: "Not found"});
            
        } catch (error) {
            return res.json({msg: error.msg});
        }
    },
    insert: async(req, res) => {
        try {
            const {title, author, content} = req.body;
            const sql = 'INSERT INTO posts(title, author, content) VALUES($1, $2, $2) RETURNING *';
            const {rows} = await postgre.query(sql, [title, author, content]);

            return res.json({msg: "OK", data: rows[0]});

        } catch (error) {
            return res.json({msg: error.msg});
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id;
            const {title, author, content} = req.body;
            const sql = 'UPDATE posts SET title = $2, author = $3, content = $4 WHERE id = $1 RETURNING *';
            const {rows} = await postgre.query(sql, [id, title, author, content]);

            return res.json({msg: "OK", data: rows[0]});

        } catch (error) {
            return res.json({msg: error.msg});
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id;
            const sql = 'DELETE FROM posts WHERE id = $1 RETURNING *';
            const {rows} = await postgre.query(sql, [id]);

            if (rows[0]) {
                return res.json({msg: "OK", data: rows})
            }

            return res.status(404).json({msg: "Not found"})

        } catch (error) {
            return res.json({msg: error.msg});
        }
    }
}

module.exports = postController
