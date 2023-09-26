import axios from 'axios'

const mailslurpGraphql = process.env.MAILSLURP_GRAPHQL_URL || '';

export class API {

  constructor() {
    //do nothing
  }

  static async mailslurpRequest(
    params: { variables: { [key: string]: string | number | object | boolean }; query: string }
  ) {
    const response = await axios.post(mailslurpGraphql, {
      query: params.query,
      variables: params.variables
    },
    {
      headers: {
        "x-api-key": `${process.env.MAILSLURP_API_KEY}`
      }
    });
    return response.data;
  }
}