import { gql } from "graphql-request";
import graphQLClient from "./graphql-client";

const getAllCustomers = async () => {
  const query = gql`
    {
      allCustomers {
        data {
          _id
          firstName
          lastName
        }
      }
    }
  `;

  const response = await graphQLClient.request(query);
  const data = JSON.parse(JSON.stringify(response));

  return data.allCustomers.data;
};

export default getAllCustomers;
