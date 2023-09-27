import { environment, ENV } from "../../utils/environments.utils.js";

const openWebpage = async (value: string, type: 'page'|'site') => {
  let page;
  let base;

  switch (value) {
    case 'app login': {
      page = '/login';
      base = browser.options.baseUrl;
    }
      break;
    case 'admin panel login': {
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