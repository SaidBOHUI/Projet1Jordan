const {Schema, model} = require ('mongoose');



const articleSchema = new Schema({
    title : {
        type : String, 
        required : true,
        unique : true
    },
    description : {
        type : String, 
        required : true,
        unique : false
    },
    author: {
        type:  Schema.Types.ObjectId,
        ref: 'User'
    }
 })

const ArticleModel = model('Article', articleSchema)

module.exports = {ArticleModel}