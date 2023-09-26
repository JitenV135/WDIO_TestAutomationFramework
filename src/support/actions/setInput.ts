const setInput = async (action: string, value: string, selector: string) => {
  let input;

  switch(value) {
    case 'valid app parent email':
      input = process.env.APP_PARENT_EMAIL;
      break;
    case 'valid app parent password':
      input = process.env.APP_PARENT_PASSWORD;
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