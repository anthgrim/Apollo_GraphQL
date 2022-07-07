const {gql} = require("apollo-server")

const typeDefs = gql`
    type Query {
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(categoryId: ID!): Category
    }

    # Custom Types
    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean
        category: Category
        reviews: [Review!]!
    }

    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: String!
    }
`

module.exports = {typeDefs}