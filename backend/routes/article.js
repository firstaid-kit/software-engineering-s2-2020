const router = require('express').Router();
const Article = require('../schemas/article_schema');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

router.route('/').get((req, res) => {
    Article.find()
      .then(article => res.json(article))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/addArticle').post((req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const year = req.body.year;
    const doi = req.body.doi;
    const topics= req.body.topics;

    const newArticle = new Article({
        title,
        author,
        year,
        doi,
        topics
    });

    newArticle.save()
        .then(() => res.json('Article saved!'))
        .catch(err => res.status(400).json('Error: ') + err);
});

module.exports = router;