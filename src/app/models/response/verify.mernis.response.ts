export class VerifyMernisResponse {
  verifyMernisResponseHeader: VerifyMernisResponseHeader;
  verified: boolean;
}
export class VerifyMernisResponseHeader {
  transactionId: string;
  responseDateTime: string;
  responseCode: string;
  responseDescription: string;
  displayText: string;
}