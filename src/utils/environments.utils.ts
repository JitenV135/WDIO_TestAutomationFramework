import * as dotenv from 'dotenv';

dotenv.config();

export const environment = {
  local: {
    baseUrl: 'http://app.docker.localhost/',
    adminUrl: 'http://admin.docker.localhost/',
    graphqlUrl: 'https://api.docker.localhost/graphql',
  },
  staging: {
    baseUrl: 'https://app.staging.poipt.net/',
    adminUrl: 'https://admin.staging.poipt.net/',
    graphqlUrl: 'https://api.staging.poipt.net/graphql',
  }
}

type EnvKey = keyof typeof environment;

export const ENV = process.env.ENV as EnvKey;