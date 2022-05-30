var express = require('express');
var router = express.Router();
const articleController = require('../controllers/articleController')
const userController = require('../controllers/userController')


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// Routes Users
router.route('/users').get(userController.getAllUsers)
router.route('/user/:id').get(userController.getUserById)
// router.route('/user/:id').post(userController.postUserById)
router.route('/users').post(userController.addUser)
router.route('/users').put(userController.updateUser)
router.route('/users').delete(userController.deleteUser)


router.route('/test').get(userController.test)


// Routes articles
router.route('/article').get(articleController.getAllArticles)
router.route('/article/:id').get(articleController.getArticleById)
router.route('/article').post(articleController.addArticle)
router.route('/article').put(articleController.updateArticle)
router.route('/article').delete(articleController.deleteArticle)



module.exports = router;
