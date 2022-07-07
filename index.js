const {ApolloServer, gql} = require("apollo-server")
const {products, categories, reviews} = require("./db")
const {typeDefs} = require("./schema")
const { Query } = require("./resolvers/Query")
const { Category } = require("./resolvers/Category")
const { Product } = require("./resolvers/Product")

const server = new ApolloServer(
    {
        typeDefs, 
        resolvers: {Query, Product, Category},
        context: {
            products,
            categories,
            reviews
        }
})


server.listen().then(({url}) => console.log("server is ready at " + url))

// const typeDefs = gql`
//     type Query{
//         hello: String!
//         numberOfAnimals: Int
//         price: Float
//         isCool: Boolean
//         names: [String!]!
//     }
// `

// const resolvers = {
//     Query: {
//         hello: () => {
//             return "Hello World!"
//         },
//         numberOfAnimals: () => {
//             return 4265
//         },
//         price: () => {
//             return 23.59
//         },
//         isCool: () => {
//             return false
//         },
//         names: () => {
//             return ["Kevin", "John", "Madina"]
//         }
//     }
// }