export class PfHeaderResponse {
    constructor(
        public transactionId: string,
        public responseDateTime: string,
        public responseCode: string,
        public responseDescription: string
    ) {}


}
