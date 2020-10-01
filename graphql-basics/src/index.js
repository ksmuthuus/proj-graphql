import {GraphQLServer} from 'graphql-yoga'

const typeDefs = `
type Query{
  me: User!,
  post:Post!
}

type User{
  id:ID,
  name: String!,
  email: String!,
  age:Int
}

type Post{
  id:ID,
  title: String!,
  body: String!,
  published:Boolean!
} 
`
  
const resolvers = {
  Query:{
    me(){
      return {
        id:"12345", name:"mks",email:"mks@grr.la",age:30
      }
    },

    post(){
      return {
        id:"4321", title:"my post", body:"this is a sample post", published:false
      }
    }
  }
}

const server = new GraphQLServer({
  typeDefs, resolvers
})

server.start(() => {
  console.log('Running...')
})