export class VerifyMernisRequest {
  constructor(
    public name: string,
    public surname: string,
    public identityNo: string,
    public birthDate: string
  ) {}
}
