import { testData, inviteTests } from "../testData.js";
import cleanInvite from "./actions/cleanInvite.js";

const clean = async () => {
  const tests = testData.getAllData();
  console.log('TESTS:', tests);

  for (let i = 0; i < tests.length; i++) {
    switch (true) {
      case (inviteTests.includes(tests[i].type)): {
        const email = `${tests[i].value}@mailslurp.com`;
        await cleanInvite(email);
      }
    }
  }
}

export default clean;