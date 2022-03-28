import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphcmstoken = process.env.GRAPHCMS_TOKEN

export default async function comments(req, res) {
  const graphqlClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmstoken}`,
    },
  })

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `
  try {
    const result = await graphqlClient.request(query, req.body)
    return res.status(200).send(result)
  } catch (error) {
    return res.status(500).send(error)
    console.log(error)
  }
}
