export class CommissionDto {
  constructor(
    public percentage: number,
    public internationalPercentage: number,
    public paymentType: number,
    public installment2: number,
    public installment3: number,
    public installment4: number,
    public installment5: number,
    public installment6: number,
    public installment7: number,
    public installment8: number,
    public installment9: number,
    public installment10: number,
    public installment11: number,
    public installment12: number,
    public installment13_24: number,
    public installment25_36: number,
  ) {
  }
}
