import { OrderState } from "../order.state.enum";

export class AdminOrderStatusUpdateDto {
  constructor(
    public identifier: number,
    public orderStatus: OrderState,
  ) {
  }
}
