const router = require('express').Router();
let Search = require('../schemas/search_schema');

router.route('/').get((req, res) => {
    Search.find()
      .then(search => res.json(search))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/lastSearch').get((req,res) => {
    Search.find().limit(1).sort({natural:-1})
        .then(search => res.json(search))
        .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/newSearch').post((req, res) => {
    const description = req.body.description;
    const checkboxes = req.body.checkboxes;
    const dateFrom = req.body.dateFrom;
    const dateTo = req.body.dateTo;

    const newSearch = new Search({
        description,
        checkboxes,
        dateFrom,
        dateTo
    });

    newSearch.save()
        .then(() => res.json('Search saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});

module.exports = router;