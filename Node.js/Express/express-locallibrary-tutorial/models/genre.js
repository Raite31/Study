const mongoose = require('mongoose')

const Schema = mongoose.Schema

const GenreSchema = new Schema({
    name: {type: String, required: true, min: 3, max: 100}
})

// 虚拟属性'url'： 图书类型 URL
GenreSchema.virtual('url').get(function () {
    return '/catalog/genre/' + this._id
})

// 导出Genre模型
module.exports = mongoose.model('Genre', GenreSchema)
