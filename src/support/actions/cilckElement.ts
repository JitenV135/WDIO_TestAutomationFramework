const clickElement = async (action: string, selector: string) => {
  const command = action === 'click' ? 'click' : 'doubleClick';
  await $(`*[data-testid='${selector}']`)[command]();
};

export default clickElement;