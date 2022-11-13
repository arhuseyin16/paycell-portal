export class SendOtp {
  constructor(
    public expireDate: string,
    public nextAvailableRequestDate: string,
  ) {}
}
