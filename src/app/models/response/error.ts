
export class Error {
  constructor(
    public localizedMessage: string,
    public detail: string,
    public message: string,
    public title: string,
    public uri: string,
    public status: number,
  ) {
  }
}
