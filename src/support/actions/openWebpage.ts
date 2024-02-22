import { environment, ENV } from "../../utils/environments.utils.js";
import getEmailContent from "../../utils/api/mailslurp/actions/getEmailContent.js";
import { testData } from "../../utils/data/testData.js";

const openWebpage = async (value: string, type: 'page'|'site'|'link') => {
  let page;
  let base;

  if (type === 'link') {
    const inboxId = testData.getData(browser.sessionId);
    const url = await getEmailContent(inboxId,'link');
    await browser.url(url);
  } else {
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
}

export default openWebpage;