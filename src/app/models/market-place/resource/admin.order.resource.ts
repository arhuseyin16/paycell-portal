import { OrderState } from '../order.state.enum';
import { AdminOrderAddressResource } from './admin.order.address.resource';
import { LineItemResource } from './line.item.resource';

export class AdminOrderResource {
  constructor(
    public identifier: number,
    public orderLineItems: LineItemResource,
    public customerId: number,
    public orderState: OrderState,
    public customerFullName: string,
    public customerEmail: string,
    public msisdn: string,
    public shipmentPrice: number,
    public totalPrice: number,
    public paymentTotal: number,
    public cargoSla: number,
    public sellerCargoPrice: number,
    public createdDate: Date,
    public deliveryAddress: AdminOrderAddressResource,
    public billingAddress: AdminOrderAddressResource,
    public noteToMerchant: string,
  ) {
  }
}
