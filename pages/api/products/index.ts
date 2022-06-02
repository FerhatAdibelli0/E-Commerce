import { gql } from "graphql-request";

import { GraphQLClient } from "graphql-request";

const endpoint = "https://graphql.fauna.com/graphql";

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Basic Zm5BRW9GMG1DaUFDUzY0Q2puS1hFeVE1aEFwM0w0cEtLb3pGaWNnaTpGZXJoYXQ6YWRtaW4=`,
  },
});

const getAllProducts = async () => {
  const query = gql`
    query {
      posts {
        data {
          name
          category
          price
          currency
          image
          bestseller
          featured
        }
      }
    }
  `;

  const response = await graphQLClient.request(query);
  const data = JSON.parse(JSON.stringify(response));

  return data.posts.data;
};

export default getAllProducts;
