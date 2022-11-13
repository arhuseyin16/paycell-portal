export class MerchantRoleResponse {
  email: string;
  masters: Array<Master>;
}

export class Master {
  merchantId: string;
  merchantName: string;
  legalName: string;
  hasSub: boolean;
  authorities: Array<string>;
}
