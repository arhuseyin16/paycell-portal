
export class SectorInfoResponse {
  constructor(
    public code: number,
    public description: string,
    public parentCode: number,
    public installmentCount: number,
  ) {
  }
}
