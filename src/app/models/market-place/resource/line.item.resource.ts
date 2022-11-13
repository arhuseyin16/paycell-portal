import { Price } from "./price";

export class LineItemResource {
    constructor(
      public productModelTitle: string,
      public imageUrl: string,
      public amount: number,
      public unitPrice: Price,
      public unitListPrice: Price,
      public totalPrice: Price,
      ) {
    }
  }
  