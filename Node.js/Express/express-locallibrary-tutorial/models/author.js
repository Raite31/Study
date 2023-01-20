const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AuthorSchema = new Schema(
    {
        first_name: {type: String, required: true, max: 100},
        family_name: {type: String, required: true, max: 100},
        data_of_birth: {type: Date},
        data_of_death: {type: Date}
    }
)

// 虚拟属性'name'：表示作者全名
AuthorSchema.virtual('name').get(function () {
    return this.family_name + ',' + this.first_name
})

// 虚拟属性'url': 作者URL
AuthorSchema.virtual('url').get(function () {
    return '/catalog/author/' + this._id
})

// 导出Auhor模型
module.exports = mongoose.model('Author', AuthorSchema)
