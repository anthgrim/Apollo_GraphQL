Category = {
    products: (parent, args, context) => {
        const targetProducts = context.products.filter(prod => prod.categoryId === parent.id)
        return targetProducts
    }
}

module.exports = {Category}