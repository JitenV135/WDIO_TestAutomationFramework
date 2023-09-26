const isDisplayed = async (checkType: string, selector: string) => {
  if (checkType === 'see') {
    await expect($(`*[data-testid='${selector}']`)).toBeDisplayed();
  } else {
    await expect($(`*[data-testid='${selector}']`)).not.toBeDisplayed();
  }
};

export default isDisplayed;