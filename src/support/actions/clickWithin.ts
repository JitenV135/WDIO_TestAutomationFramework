import clickElement from "./cilckElement.js";
import scrollWithin from "./scrollWithin.js";

const clickWithin = async (childElement: string, parentElement: string) => {
  await clickElement('click', parentElement);
  await scrollWithin(parentElement, childElement);
  await clickElement('click', childElement);
}

export default clickWithin;