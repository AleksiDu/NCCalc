const client = require('../db');
const getTools = (req, res) => {
    client.query("SELECT * FROM tool_list.tool_list", (error, results) => {
        if (error) console.error(error);
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getTools
};