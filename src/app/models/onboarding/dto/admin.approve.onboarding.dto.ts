export class AdminDataRequiredOnboardingDto {
  constructor(
    public identifier: number,
    public mccCode: string,
    public taxCode: string
  ) {
  }
}
