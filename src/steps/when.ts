import { When } from "@wdio/cucumber-framework";

import setInput from "../support/actions/setInput.js";
import clickElement from "../support/actions/cilckElement.js";

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