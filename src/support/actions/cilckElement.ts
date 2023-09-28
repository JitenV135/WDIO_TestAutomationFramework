const clickElement = async (action: string, selector: string) => {
  const elementSelector = `*[data-testid='${selector}']`;
  const command = action === 'click' ? 'click' : 'doubleClick';

  (await $(elementSelector)).waitForClickable();
  await $(elementSelector)[command]();
};

export default clickElement;