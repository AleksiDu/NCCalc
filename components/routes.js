const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send("api route");
});

module.exports = router;
