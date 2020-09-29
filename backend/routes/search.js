const router = require('express').Router();
let Search = require('../schemas/search_schema');

router.route('/newSearch').post((req, res) => {
    const description = req.body.description;
    const dateFrom = req.body.dateFrom;
    const dateTo = req.body.dateTo;

    const newSearch = new Search({
        description,
        dateFrom,
        dateTo
    });

    newSearch.save()
        .then(() => res.json('Search saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});

module.exports = router;