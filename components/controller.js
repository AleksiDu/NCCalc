const client = require('../db');
const getTools = (req, res) => {
    client.query("SELECT * FROM tool_list", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getTools
};