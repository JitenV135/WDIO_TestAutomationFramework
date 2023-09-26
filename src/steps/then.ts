import { Then } from "@wdio/cucumber-framework";

import isDisplayed from "../support/checks/isDisplayed.js";

Then(
  /^I (see|do not see) (?:the|a|an) ([^"]*)? displayed$/,
  async (type: string, element: string) => {
    await isDisplayed(type, element);
  }
);