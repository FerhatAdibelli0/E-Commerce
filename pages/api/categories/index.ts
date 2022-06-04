import { gql } from "graphql-request";

// import { GraphQLClient } from "graphql-request";

// const endpoint = "https://graphql.fauna.com/graphql";

// const graphQLClient = new GraphQLClient(endpoint, {
//   headers: {
//     authorization: `Basic Zm5BRW9MbzlOM0FDVEp0ZW5pSmNUVmRlblZRd2tFdF9lYmdXUC1NXzpGZXJoYXQ6YWRtaW4=`,
//   },
// });

// export const getAllCaterories = async () => {

//   const query = gql`
//     query {
//       posts {
//         data {
//           category
//         }
//       }
//     }
//   `;

//   const response = await graphQLClient.request(query);
//   const data = JSON.parse(JSON.stringify(response));

//   return data.posts.data;
// };

async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
