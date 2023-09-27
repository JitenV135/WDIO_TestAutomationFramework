import { Then } from "@wdio/cucumber-framework";

import isDisplayed from "../support/checks/isDisplayed.js";
import isEmailReceived from "../support/checks/isEmailReceived.js";

Then(
  /^I (see|do not see) (?:the|a|an) ([^"]*)? displayed$/,
  async (type: string, element: string) => {
    await isDisplayed(type, element);
  }
);

Then(
  /^I expect the email to be received$/,
  async () => {
    await isEmailReceived();
  }
);