export class UserMerchantResponse {
  userMerchants: Array<UserMerchantResponseView>;
}

export class UserMerchantResponseView {
  merchantId: string;
  legalName: string;
  masterMerchantId: string;
  merchantName: string;
  hasSub: boolean;
  isPotential: boolean;
}
