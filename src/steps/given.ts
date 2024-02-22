import { Given } from "@wdio/cucumber-framework";

import openWebpage from "../support/actions/openWebpage.js";
import appLogin from "../support/actions/common/appLogin.js";
import adminLogin from "../support/actions/common/adminLogin.js";
import receiveEmailInvite from "../support/actions/common/receiveEmailInvite.js";

Given(
  /^I open the ([^"]*)? (page|site|link)$/,
  async (value: string, type: 'page'|'site'|'link') => {
    await openWebpage(value, type);
  }
);

Given(
  /^I login to the app(?: as the (admin) user of a (parent|child) organization)?$/,
  async (userType?: string, orgType?: string) => {
    await appLogin(userType, orgType);
  }
)

Given(
  /^I login to the admin panel(?: as the (admin) user)?$/,
  async (userType?: string) => {
    await adminLogin(userType);
  }
)

Given(
  /^I receive an email invite?$/,
  async () => {
    await receiveEmailInvite();
  }
)