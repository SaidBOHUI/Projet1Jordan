const mongoose = require('mongoose');
const {UserModel} = require('../models/user')
const {ArticleModel} = require('../models/article')



module.exports = {

    getAllArticles : (req, res) => {UserModel.find({}, (err, users) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            ArticleModel.find({}, (err, articles) => {
                if (err) {
                    res.status(500).render('error',{
                        error: err
                    })
                } 
                else {
                    if (articles == undefined || !articles) {
                        res.status(404).send("Nous n'avons trouvé aucun article")
                    }
                    console.log(articles);
                    res.status(200).render('index',{
                        // message: 'Voici votre article',
                        articles,
                        users
                    })
                }
            })
        }
    })},



    getArticleById: (req, res) => {UserModel.find({}, (err, user) => {
        if (err) {
            res.status(500).send(err)
          } 
        else {
            ArticleModel.findById({_id: req.params.id}, (err, article) => {
                if (err) {
                    res.status(500).render('error',{
                        message: "Cet article n'existe pas",
                        error: err.message
                    })
                }
                else {
                    res.status(200).render('article',{
                        article,
                        user
                    })
                }
            })
        }
    })   
    },



    addArticle: (req, res) => {
        const article = new ArticleModel({
            title: req.body.title,
            description: req.body.description,
            author: req.params.author
        })
        article.save((err, article) => {
            if (err) {
                res.status(500).render('error',{
                    message: "Cet article n'a pas pu être sauvegardé",
                    error: err.message
                })
            } else {
                res.status(200).redirect('/article')
            }
        })
    },



    updateArticle: (req, res) => {
        ArticleModel.updateOne({ _id: req.body.id},{title: req.body.title, description: req.body.description}, (err, article) => {
            res.json({
                article
            })
        })
    },  



    deleteArticle: (req, res) => {
        ArticleModel.deleteOne({ id: req.body.id}, (err, article) => {
            res.json({
                article
            })
        })
    }    


}