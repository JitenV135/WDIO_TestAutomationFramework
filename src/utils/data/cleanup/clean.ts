import { testData, inviteTests } from "../testData.js";
import cleanInvite from "./actions/cleanInvite.js";

const clean = async () => {
  const tests = testData.getAllData();
  console.log('TESTS:', tests);
  tests.forEach(async (test) => {
    switch (true) {
      case (inviteTests.includes(test.type)): {
        const email = `${test.value}@mailslurp.com`;
        const result = await cleanInvite(email);
        console.log(test.type, 'ID CLEANED:', result);
      }
    }
  })
}

export default clean;