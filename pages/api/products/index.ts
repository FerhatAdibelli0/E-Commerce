// import { gql } from "graphql-request";

// import { GraphQLClient } from "graphql-request";

// const endpoint = "https://graphql.fauna.com/graphql";

// const graphQLClient = new GraphQLClient(endpoint, {
//   headers: {
//     authorization: `Basic Zm5BRW9MbzlOM0FDVEp0ZW5pSmNUVmRlblZRd2tFdF9lYmdXUC1NXzpGZXJoYXQ6YWRtaW4=`,
//   },
// });

// const getAllProducts = async () => {
//   const query = gql`
//     query {
//       posts {
//         data {
//           name
//           category
//           price
//           currency
//           image
//           bestseller
//           featured
//           id
//         }
//       }
//     }
//   `;

//   const response = await graphQLClient.request(query);
//   const data = JSON.parse(JSON.stringify(response));

//   return data.posts.data;
// };


// export default getAllProducts;
