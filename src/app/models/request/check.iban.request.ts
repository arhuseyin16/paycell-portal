export class CheckIbanRequest {
  constructor(
    public iban: string,
    public identityNo: string
  ) {
  }
}