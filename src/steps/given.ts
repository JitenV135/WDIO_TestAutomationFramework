import { Given } from "@wdio/cucumber-framework";

import openWebpage from "../support/actions/openWebpage.js";

Given(
  /^I open the ([^"]*)? (page|site)$/,
  async (value: string, type: 'page'|'site') => {
    await openWebpage(value, type);
  }
);