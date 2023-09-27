import { testData } from "../../utils/data/testData.js";

const setInput = async (action: string, value: string, selector: string) => {
  let input;
  const sessionId = browser.sessionId;

  switch(value) {
    case 'valid app admin parent email':
      input = process.env.APP_ADMIN_PARENT_EMAIL;
      break;
    case 'valid app admin child email':
      input = process.env.APP_ADMIN_CHILD_EMAIL;
      break;
    case 'valid app password':
      input = process.env.APP_PASSWORD;
      break;
    case 'valid admin email':
      input = process.env.ADMIN_EMAIL;
      break;
    case 'valid admin password':
      input = process.env.ADMIN_PASSWORD;
      break;
    case 'test email':
      input = `${testData.getData(sessionId)}@mailslurp.com`;
      break;
    default:
      input = value;
  }
  const command = (action === 'add') ? 'addValue' : 'setValue';
  if (input) {
    await $(`*[data-testid='${selector}']`)[command](input);
  }
}

export default setInput;