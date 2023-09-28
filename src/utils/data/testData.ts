export enum TestType {
  channelEmailInvite = 'channelEmailInvite',
  channelEmailSignup = 'channelEmailSignup',
  memberEmailInvite = 'memberEmailInvite',
  memberEmailSignup = 'memberEmailSignup',
  resetPassword = 'resetPassword',
  // resetPasswordEmail = 'resetPasswordEmail',
  // publicLinkEmail = 'public link email',
  // configureAssessment = 'configure assessment',
  // createCampaign = 'create campaign',
  // campaignLinkUserEmail = 'campaign link user email',
  // createAssessmentAPI = 'create assessment API',
  otpEmail = 'otpEmail',
}

export const emailTests = [
  TestType.channelEmailInvite,
  TestType.channelEmailSignup,
  TestType.memberEmailInvite,
  TestType.memberEmailSignup,
  TestType.otpEmail,
]

export const inviteTests = [
  TestType.channelEmailInvite,
  TestType.memberEmailInvite,
]

class Data {
  private testData: { id: string, type: TestType, value: string | number }[];
  private testToken: string;

  constructor() {
    this.testData = [];
    this.testToken = '';
  }

  // Method to set an auth token for graphql
  setToken(token: string) {
    this.testToken = token;
  }

  // Method to get the auth token for graphql
  getToken() {
    return this.testToken;
  }

  // Method to add an object to the 'testData' array
  addData(id: string, type: TestType, value: string | number) {
    this.testData.push({ id, type, value });
  }

  // Method to get value by id
  getData(id: string) {
    return (this.testData.find((o) => o.id === id))?.value as string;
  }

  // Method to get value by id
  getType(id: string) {
    return (this.testData.find((o) => o.id === id))?.type as string;
  }

  // Method to get all data from the 'testData' array
  getAllData() {
    return this.testData;
  }
}

export const testData = new Data();

