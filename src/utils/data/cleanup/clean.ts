import { testData, TestType, inviteTests, signupTests } from "../testData.js";
import cleanInvite from "./actions/cleanInvite.js";

const clean = async () => {
  const tests = testData.getAllData();
  console.log('TESTS:', tests);

  let inviteId, userId, userOrgAsocId;

  for (let i = 0; i < tests.length; i++) {
    switch (true) {

      case (inviteTests.includes(tests[i].type)): {
        const email = `${tests[i].value}@mailslurp.com`;

        inviteId = await cleanInvite(email);
        console.log(cleanInvite.name.toUpperCase(), 'REMOVED ID:', inviteId);
      }
        break;

      case (signupTests.includes(tests[i].type)): {
        const email = `${tests[i].value}@mailslurp.com`;

        inviteId = await cleanInvite(email);
        console.log(cleanInvite.name.toUpperCase(), 'REMOVED ID:', inviteId);
      } 
    }
  }
}

export default clean;