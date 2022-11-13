export class AdminAppUpdateMerchantDto {
  constructor(
    // Tab 1
    public installmentInStore: boolean,

    // Tab 2
    public hasShopPage: boolean,
    public logo: string,
    public banner: string,
    public shopName: string,
    public shopUrl: string,
    public description: string,
    public holidayModeOn: boolean,
    public showOutOfStockItems: boolean,

    // Tab 3
    public courierInfoSelection: string,
    public freeCargo: boolean,
    public courierPayment: boolean,
    public courierPaymentPrice: number,
    public courierChartPayment: boolean,
    public courierChartPaymentPrice: number,
    public returnAddressInfo: string,
    public cargoPriceCalculateSelection: string,
  ) {}
}
