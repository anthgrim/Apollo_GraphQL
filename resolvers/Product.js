Product = {
    category: (parent, args, context) => {
        const targetCategory = context.categories.find(cat => cat.id === parent.categoryId)
        return targetCategory
    },
    reviews: (parent, args, context) => {
        const targetReviews = context.reviews.filter(rev => rev.productId === parent.id)
        return targetReviews
    }
}

module.exports = {Product}