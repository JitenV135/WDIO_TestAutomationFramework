import { When } from "@wdio/cucumber-framework";

import setInput from "../support/actions/setInput.js";
import clickElement from "../support/actions/cilckElement.js";
import clickWithin from "../support/actions/clickWithin.js";

When(
  /^I (enter|add) ([^"]*)? .* the ([^"]*)?$/,
  async (action: string, value: string, selector: string) => {
    await setInput(action, value, selector);
  }
);

When(
  /^I (click|doubleClick) the ([^"]*)?$/,
  async (action: string, selector: string) => {
    await clickElement(action, selector);
  }
);

When(
  /^I click the ([^"]*)? within the ([^"]*)?$/,
  async (childElement: string, parentElement: string) => {
    await clickWithin(childElement, parentElement);
  }
);