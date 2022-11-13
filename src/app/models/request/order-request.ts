export class OrderRequest {
  constructor(
    public costumerId: number,
    public costumerFullname: string,
    public costumerEmail: string,
    public msidn: string,
    public shipmentPrice: string,
    public totalPrice: string,
    public paymentTotal: string,
    public merhantId: string,
    public merhantName: string,
    public cargoSla: string,
    public sellerCargoPrice: string,
  ) {
  }
}
