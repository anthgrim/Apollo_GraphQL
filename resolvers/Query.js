const {products, categories} = require("../db")
Query = {
    products: () => {
        return products
    },
    product: (parent, args, context) => {
        const targetProduct = context.products.find(prod => prod.id === args.id)
        return targetProduct
    },
    categories: () => {
        return categories
    },
    category: (parent, args, context) => {
        const targetCategory = context.categories.find(cat => cat.id === args.categoryId)
        return targetCategory
    }
}

module.exports = {Query}