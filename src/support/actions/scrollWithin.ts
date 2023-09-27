const scrollWithin = async (parentElement: string, childElement: string) => {
  const selector = `*[data-testid='${childElement}']`;
  const container = `*[data-testid='${parentElement}']`;

  while (!(await (await $(selector)).isDisplayedInViewport())) {
    browser.execute((container) => {
      const el = document.querySelector(`${container}`);
      if (el) {
        el.scrollTop = el.scrollTop + 10;
      }
    }, container);
  }
}

export default scrollWithin;