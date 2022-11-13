import {PfDcbResponse} from '../response/pf-dcb.response';

export class PfDcbRequest {
  constructor(
    public city: string,
    public district: string,
    public zipCode: [PfDcbResponse]
  ) {
  }
}
