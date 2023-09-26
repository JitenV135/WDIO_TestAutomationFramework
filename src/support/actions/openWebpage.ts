import environment from "../../utils/environments.utils.js";

type EnvKey = keyof typeof environment;

const ENV = process.env.ENV as EnvKey;

const openWebpage = async (value: string, type: 'page'|'site') => {
  let page;
  let base;

  switch (value) {
    case 'app login': {
      page = '/login';
      base = browser.options.baseUrl;
    }
      break;
    case 'admin login': {
      page = '/login';
      base = environment[ENV].adminUrl;
    }
      break;
    default: {
      page = '';
      base = browser.options.baseUrl;
    }
  }

  const url = (type === 'page') ? base + page : value;
  
  await browser.url(url);
}

export default openWebpage;