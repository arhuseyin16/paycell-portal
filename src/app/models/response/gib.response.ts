import { GibInfo } from "./gib.info";

export class GibResponse {
  constructor(
    public resultCode: number,
    public resultDesc: string,
    public info: GibInfo,
  ) {
  }
}
