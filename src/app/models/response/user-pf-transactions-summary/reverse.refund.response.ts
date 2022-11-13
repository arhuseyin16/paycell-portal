import {PfHeaderResponse} from "./pf.header.response";
export class PfReverseRefundResponse {
  constructor(
    public PfResponseHeader :PfHeaderResponse,
    public reconciliationDate :string,
    public approvalCode :string,
    public retryStatusCode :string,
    public retryStatusDescription :string,
    public referenceNumber :string,
    public responseDescription :string
    
  ) {}


}
