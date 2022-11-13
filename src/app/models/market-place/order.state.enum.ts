export enum OrderState {
  PREINITIAL = 'PREINITIAL',
  INITIAL = 'INITIAL',
  PREPARING = 'PREPARING',
  WAITING_SEND_TO_CARGO = 'WAITING_SEND_TO_CARGO',
  SEND_TO_CARGO = 'SEND_TO_CARGO',
  WAITING_FOR_CUSTOMER_DELIVERY_CONFIRM = 'WAITING_FOR_CUSTOMER_DELIVERY_CONFIRM',
  CUSTOMER_DELIVERY_CONFIRMED = 'CUSTOMER_DELIVERY_CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export namespace OrderState {
  export function getOpenOrderStateList(): OrderState[] {
      return new Array(OrderState.PREINITIAL, OrderState.INITIAL, OrderState.PREPARING, OrderState.WAITING_SEND_TO_CARGO);
  }
  export function getSendingOrdersStateList(): OrderState[] {
    return new Array(OrderState.SEND_TO_CARGO, OrderState.WAITING_FOR_CUSTOMER_DELIVERY_CONFIRM);
  }
  export function getCompletedOrdersStateList(): OrderState[] {
    return new Array(OrderState.CUSTOMER_DELIVERY_CONFIRMED, OrderState.COMPLETED, OrderState.CANCELLED);
  }
  export function getCancellationsAndRefundsStateList(): OrderState[] {
    return new Array();
  }
}
