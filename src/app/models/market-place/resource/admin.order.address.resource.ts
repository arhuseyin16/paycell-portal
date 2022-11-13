export class AdminOrderAddressResource {
    constructor(
      public cityId: number,
      public cityName: string,
      public districtId: number,
      public districtName: string,
      public address: string,
      public contactName: string,
      public contractSurname: string,
      public phone:string
    ) {
    }
  }
  