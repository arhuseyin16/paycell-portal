
export class PmpServiceRequest {
  constructor(
    public merchantId: string,
    public userId: string,
    public requestMethod: string,
    public requestUrl: string,
    public input: any,
  ) {
  }
}
