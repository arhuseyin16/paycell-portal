export class Status {
  constructor(
    public state: string,
    public operator: string,
    public reason: string,
    public userMessage: string
  ) {
  }
}
