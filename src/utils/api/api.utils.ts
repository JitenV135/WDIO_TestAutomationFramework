import axios from 'axios'
import { environment, ENV } from '../environments.utils.js';
import { testData } from '../data/testData.js';

const catalystGraphql = environment[ENV].graphqlUrl
const mailslurpGraphql = process.env.MAILSLURP_GRAPHQL_URL || '';

export class API {

  constructor() {
    //do nothing
  }

  static async catalystLogin() {
    const response = await axios.post(catalystGraphql, {
      query: `
              mutation login($email: String!, $password: String!) {
                login(email: $email, password: $password) {
                  token
                }
              }
            `,
      variables: {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
      }
    });
    return response.data;
  }

  static async catalystRequest(
    params: { variables: { [key: string]: string | number | object | boolean }; query: string }
  ) {
    const reponse = await axios.post(catalystGraphql, {
      query: params.query,
      variables: params.variables
    }, 
    {
      headers: {
        Authorization: `Bearer ${testData.getToken()}`
      }
    }
    );
    return reponse.data;
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